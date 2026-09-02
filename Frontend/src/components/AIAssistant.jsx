import { FaRobot, FaTimes, FaPaperPlane, FaMicrophone } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");
  const welcomeWords = ["Hi!", "I'm", "Nexa", "AI", "👋"];
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index == welcomeWords.length - 1) {
        setShowWelcome(false);
        clearInterval(interval);

        return;
      }

      setWelcomeText((prev) => {
        return prev + " " + welcomeWords[index];
      });

      index++;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const messagesEndRef = useRef(null);

  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  useEffect(() => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      console.log("Speech:", transcript);

      setMessage(transcript);
    };

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.log("Speech error:", event.error);
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
      recognitionRef.current = null;
    };
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    recognitionRef.current.start();
  };
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      setListening(false);
    }
  };

  if (recognitionRef.current) {
    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setMessage(transcript);
    };

    recognitionRef.current.onstart = () => {
      setListening(true);
    };

    recognitionRef.current.onend = () => {
      setListening(false);
    };
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/ai/chat`, {
        message: userMessage,
      });

      if (response.data.success) {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: response.data.answer,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: response.data.message,
          },
        ]);
      }
    } catch (error) {
      console.log("AI ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I couldn't connect to the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot />
              </div>

              <div>
                <h3 className="font-bold">NexaTech AI</h3>
                <p className="text-xs text-blue-100">Your AI Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {/* Welcome */}
            {messages.length === 0 && (
              <div className="flex items-start gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <FaRobot size={14} />
                </div>

                <div className="bg-white border rounded-xl px-4 py-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Hi! 👋 I'm NexaTech AI. How can I help you?
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      "What is NexaTech?",
                      "What services does NexaTech provide?",
                      "What technologies does NexaTech use?",
                      "How can I contact NexaTech?",
                    ].map((question) => (
                      <button
                        key={question}
                        onClick={() => {
                          setMessage(question);
                        }}
                        className="block w-full text-left text-sm px-3 py-2 rounded-lg border border-blue-100 text-blue-600 hover:bg-blue-50 transition"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-xl max-w-[80%] text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex items-start gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <FaRobot size={14} />
                </div>

                <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>

                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    ></span>

                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask something..."
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              <button
                onClick={listening ? stopListening : startListening}
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition"
              >
                {listening ? <FaTimes /> : <FaMicrophone />}
              </button>

              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6">
        {/* Welcome message */}

        {!isOpen && showWelcome && (
          <div className="mb-3 bg-white px-4 py-2 rounded-xl shadow-lg mr-15">
            🤖 {welcomeText}
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all z-50"
        >
          {isOpen ? <FaTimes size={20} /> : <FaRobot size={22} />}
        </button>
      </div>
    </>
  );
};

export default AIAssistant;
