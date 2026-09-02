import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

const Login = ({ onClose, onSignup,onLoginSuccess  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email, password },
        {
          withCredentials: true,
        },
      );

      console.log(response);
      if (response.data.success) {
          onLoginSuccess();
        onClose();
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
  

  toast.error(
    error.response?.data?.message || "Login failed"
  );
}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative flex flex-col  w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl py-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          ×
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            <span className="text-blue-600">User</span> Login
          </h1>
        </div>

        <div>
          <form className="mt-6" onSubmit={login}>
            <div className="mt-4">
              <label className="block font-semibold">Email</label>

              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full mt-2 border rounded-lg p-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold">Password</label>

              <input
                type="password"
                value={password}
                placeholder="Create a password"
                className="w-full mt-2 border rounded-lg p-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>
        </div>
        <div>
          <p className="text-center text-gray-500 mt-5">
            Don't have account?{" "}
            <button
              type="button"
              onClick={onSignup}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
