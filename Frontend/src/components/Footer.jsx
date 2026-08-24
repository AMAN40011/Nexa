import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8  text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex gap-2 items-center justify-center">
              <img src="/logo.png" alt="NexaTech Logo" className="w-8 h-8" />
              <h3 className="text-xl font-semibold">NexaTech</h3>
            </div>

            <p className="mt-4 text-gray-400">
              We build modern digital solutions that help businesses grow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-2 text-gray-400">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Services</h3>

            <div className="mt-4 flex flex-col gap-2 text-gray-400">
              <p>Web Development</p>
              <p>Mobile Development</p>
              <p>UI/UX Design</p>
              <p>Digital Solutions</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-4 flex flex-col gap-2 text-gray-400">
              <p>nexaTech@gmail.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 text-center text-gray-400">
          <p>© 2026 NexaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
