import React from "react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-gray-600 text-center">
        Have a project in mind? We'd love to hear from you.
      </p>
      <div className="flex flex-col md:flex-row gp-10 mt-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Reach out to us and let's discuss your
            project.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600">nexaTech@gmail.com</p>
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
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Send Message
          </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
