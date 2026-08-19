import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];
     
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50 relative">
      <h1>NexaTech</h1>
       <div className='hidden md:flex gap-8'>
       {
       navLinks.map((link)=>(
        <NavLink  key={link.path} to={link.path}  className={({ isActive }) =>
        isActive ? "text-blue-600 font-bold" : "text-gray-700"
      }>
          {link.name}
        </NavLink>
       ))
       }
       </div>

       {/* for shorter screen */}
       <button className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
         {isMenuOpen ? <FaTimes /> : <FaBars />}
       </button>
       {
       isMenuOpen && (
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
      </div>
    </div>
       )
       }
    </nav>
  )
}

export default Navbar
