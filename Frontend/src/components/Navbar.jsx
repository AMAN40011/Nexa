import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import axios from "axios";
import toast from "react-hot-toast";
import { getCurrentUser } from "../services/auth";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
useEffect(() => {
  const checkAuth = async () => {
    try {
      const response = await axios.get(
         `${import.meta.env.VITE_API_URL}/user/me`,
        {
          withCredentials: true,
        }
      );
      
      if (response.data.success) {
        setIsButton("Logout");
      } else {
        setIsButton("Login");
      }
    } catch (error) {
      setIsButton("Login");
    }
  };

  checkAuth();
}, []);

  const logout = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/user/logout`,
      
      {
        withCredentials: true,
      }
    );

    if (response.data.success) {
      toast.success("Logout Successful!");
      setIsButton("Login");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Logout failed"
    );
  }
};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButton,setIsButton]=useState("Login")

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

 const [authMode, setAuthMode] = useState(null);
  const navigate = useNavigate();

  const Move = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="flex justify-between items-center px-10 py-2 shadow-md bg-white sticky top-0 z-50 relative">
        <img
          src="/MainLogo.png"
          alt="NexaTech Logo"
          className="w-40 h-14 cursor-pointer"
          onClick={() => Move()}
        />
        <div className="hidden md:flex gap-8 items-center justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              {link.name}
            </NavLink>
          ))}
          {isButton === "Login" ? (
  <button
    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
    onClick={() => setAuthMode("login")}
  >
    Login
  </button>
) : (
  <button
    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
    onClick={logout}
  >
    Logout
  </button>
)}{isButton === "Logout" && (
  <NavLink
    to="/profile"
    onClick={() => setIsMenuOpen(false)}
    className={({ isActive }) =>
      `w-full px-3 py-2 rounded flex items-center gap-1 hover:bg-gray-100 hover:text-blue-600 ${
        isActive
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "text-gray-700"
      }`
    }
  >
    <FaUser />
    Profile
  </NavLink>
)}
        </div>

        {/* for shorter screen */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded hover:bg-gray-100 hover:text-blue-600 ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
               {isButton === "Login" ? (
  <button
    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
    onClick={() => setAuthMode("login")}
  >
    Login
  </button>
) : (
  <button
    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
    onClick={logout}
  >
    Logout
  </button>
)}{isButton === "Logout" && (
  <NavLink
    to="/profile"
    onClick={() => setIsMenuOpen(false)}
    className={({ isActive }) =>
      `w-full px-3 py-2 rounded flex items-center justify-center gap-1 hover:bg-gray-100 hover:text-blue-600 ${
        isActive
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "text-gray-700"
      }`
    }
  >
    <FaUser />
    Profile
  </NavLink>
)}
            </div>
          </div>
        )}
      </nav>
     {authMode === "login" && (
  <Login
    onClose={() => setAuthMode(null)}
    onSignup={() => setAuthMode("signup")}
     onLoginSuccess={() => setIsButton("Logout")}
  />
)}

{authMode === "signup" && (
  <Signup
    onClose={() => setAuthMode(null)}
    onLogin={() => setAuthMode("login")}
    onSignupSuccess={() => setIsButton("Logout")}
  />
)}
    </>
  );
};

export default Navbar;
