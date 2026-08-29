import React from "react";
import Button from "../components/Button";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import {  FaReply } from "react-icons/fa";
import ContactMain from "../components/ContactMain";

const Contact = () => {
  return (
    <>
    <ContactMain/>
    <section id="form" className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row  mt-10">
        <div className="w-full md:w-1/2 text-center md:text-left  flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Let's Start a <br />
            <span className="text-blue-600">Conversation </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you have a new project, need technical guidance,
            <br /> or simply want to explore an idea, our team is ready to help.
          </p>
          <div className="flex flex-col   justify-center ">
            <div className="flex gap-4 items-center    mt-6">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FaEnvelope className="text-blue-600 " size={25} />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">
                  hello@nexatech.com <br />
                  info@nexatech.com
                </p>
              </div>
            </div>
            <div className=" flex gap-4 items-center mt-4">
              <div className="w-15 h-15 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FaPhone className="text-blue-600 " size={25} />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">
                  +91 98765 43210 <br /> +91 91234 56789
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <div className="w-15 h-15 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FaMapMarkerAlt className="text-blue-600 " size={25} />
              </div>
              <div className="flex flex-col items-start">
                {" "}
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Mumbai, India</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <div className="w-15 h-15 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FaClock className="text-blue-600 " size={25} />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-gray-600">
                  Mon – Fri: 9:00 AM – 6:00 PM <br />
                  Sat – Sun: Closed
                </p>
              </div>
            </div>
            <div className="bg-blue-50 px-5 py-2 mt-5 rounded-xl  flex items-center">
          <div>
            <h4 className="font-semibold">
                  We typically respond
                </h4>
                <p className="text-blue-600 font-semibold">
                  within 24 hours!
                </p>
          </div>
                
                <div className="ml-auto">
                  < FaReply className="text-blue-600"
                  size={25} />
                </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-1/2">
         <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left  mt-5 md:mt-0">
            Send Us a <span className="text-blue-600">Message</span> 
          </h2>
         <div className=" mt-5 border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 py-9">
         
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
      </div>
      <div className="mt-15 shadow-md py-6 px-6 bg-blue-50 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-700 to-blue-600 rounded-full flex items-center justify-center ">
        <FaHeadset className="text-white" size={35}/>
        </div>
        <div>
        <h3 className="font-semibold text-blue-600">NEED IMMEDIATE ASSISTANCE?</h3>
        <h1 className="text-xl font-bold">Let’s Talk About Your Project</h1>
        <p className="text-gray-600">Schedule a free consultation with our experts  and <br/>let's discuss how we can bring your idea to life.</p>
        </div>
        <div className="md:ml-auto">
        
      <Button className="" variant="secondary">Book a Free Call →</Button>

        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
