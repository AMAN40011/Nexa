import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

const ContactMain = () => {
  return (
   <section
  className="bg-black w-full h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/ContactMain99.png')" }}
>
  <div className="max-w-7xl mx-auto px-8 py-20 h-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <span className="inline-flex gap-3 items-center px-4 py-2 bg-gradient-to-br from-blue-900  to-blue-900 rounded-2xl ">
            <FaPaperPlane className="text-white" />
            <h4 className="text-white font-semibold">Get In Touch</h4>
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl text-white font-bold leading-tight ">
            Let’s Build Something <br />
            Amazing <span className="text-blue-600">Together </span>
          </h1>

          <p className="mt-6 text-white">
            Have a project in mind or need expert consultation?
            <br />
            We’d love to hear from you and turn your ideas into powerful digital
            solutions.
          </p>
          <div className="mt-8 py-3 flex flex-col gap-5 items-start"><div className=" flex items-center gap-2 ">
            <FaBolt size={20} className="text-blue-600"/>
            <h3 className="text-xl font-semibold text-white" >Quick Response</h3>
          </div>

          <div className=" flex items-center gap-2 ">
            <FaShieldAlt size={20}className="text-blue-600" />
            <h3 className="text-xl text-white">Trusted Partner</h3>
          </div>
          <div className=" flex items-center gap-2 ">
            <FaHeadset size={20}className="text-blue-600"/>
            <h3 className="text-xl text-white">Expert Support</h3>
          </div></div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContactMain;
