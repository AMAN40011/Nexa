import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from 'axios';

const Signup = ({ onClose, onLogin,onSignupSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
      e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response)
      if (response.data.success) {
        onSignupSuccess();
  onClose();
  toast.success("Signup Successful!");
  navigate("/");
} else {
  toast.error(response.data.message);
}
    } catch (error) {
  toast.error(
    error.response?.data?.message || "Signup failed"
  );
}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
      <div className="relative flex flex-col  w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl py-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            <span className="text-blue-600">User</span> SignUp
          </h1>
        </div>

        <div>
          <form className="mt-6" onSubmit={register}>
            <div>
              <label className="block font-semibold">Username</label>

              <input
                type="text"
                value={username}
                placeholder="Enter your username"
                className="w-full mt-2 border rounded-lg p-3"
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold">Email</label>

              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full mt-2 border rounded-lg p-3"
                 onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold">Password</label>

              <input
                type="password"
                value={password}
                placeholder="Create a password"
                className="w-full mt-2 border rounded-lg p-3"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div>
          <p className="text-center text-gray-500 mt-5">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
              onClick={onLogin}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
