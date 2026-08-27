import React from "react";
import Button from "../components/Button";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row gp-10 mt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Let's Start a <br />
            <span className="text-blue-600">Conversation </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you have a new project, need technical guidance,
            <br /> or simply want to explore an idea, our team is ready to help.
          </p>

          <div className="mt-6">
            <div></div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">
                hello@nexatech.com info@nexatech.com
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-600">Mumbai, India</p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-1/2 border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div>
            <label className="block font-semibold">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>
          <div className="mt-4">
            <label className="block font-semibold">Message</label>

            <textarea
              placeholder="Enter your message"
              rows="5"
              className="w-full mt-2 border rounded-lg p-3"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-between">
            <Button className="mt-6">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
