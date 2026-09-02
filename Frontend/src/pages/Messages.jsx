import React from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import {
  
  FaEnvelope,
} from "react-icons/fa";


const Messages = () => {

   const [messages,setMessages]=useState([]);
    useEffect(()=>{
    const getMessage=async()=>{
    try{
         
        const response=await axios.get(`${import.meta.env.VITE_API_URL}/user/message`,{
          withCredentials: true,
        });

        if(response.data.success)
        {
            setMessages(response.data.messages);
           
        }
       
    }catch(error){
        toast.error(error.message)
    }
   }
    getMessage();

    },[])
   




  return  (
    <div className="space-y-6">

      {/* Header */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <FaEnvelope className="text-blue-600 text-xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              My Messages
            </h2>

            <p className="text-gray-500 mt-1">
              View the messages you have sent to NexaTech
            </p>
          </div>

        </div>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">

        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Your Messages
        </h3>

        {messages.length === 0 ? (
          <div className="text-center py-10">
            <FaEnvelope className="mx-auto text-gray-300 text-4xl" />

            <p className="mt-4 font-semibold text-gray-700">
              No messages yet
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Messages you send through the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {messages.map((msg) => (
              <div
                key={msg._id}
                className="flex items-start gap-4"
              >

                {/* Icon */}
                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaEnvelope className="text-blue-600" />
                </div>

                {/* Message */}
                <div className="flex-1">

                  <p className="font-semibold text-gray-900">
                    Message
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {msg.message}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;