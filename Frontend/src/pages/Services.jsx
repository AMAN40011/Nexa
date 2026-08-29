import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import Card from "../components/Card";
import ServiceMain from "../components/ServiceMain";
import Process from "../components/Process";

const Services = () => {
  return (
    <>
      <ServiceMain />
      <section id="Technologies" className=" mt-20 md:mt-0 max-w-7xl mx-auto px-8 pt-10 pb-20">
        <h4 className="text-center font-semibold text-blue-600"> WHAT WE DO </h4>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center">
          Our <span className="text-blue-600">Core</span> Service
        </h2>
        <p className="text-center text-gray-600 mt-4">
          We combine creativity, technology, and strategy to build digital
          solutions that solve real business problems and create lasting impact.
        </p>

        <div className="grid grid-cols-1  md:grid-cols-3  mt-12 gap-6">
          <Card
            icon={
              <FaLaptopCode className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="Web Development"
            description="We build fast, responsive, and scalable websites and web applications tailored to your business needs."
          />
          <Card
            icon={
              <FaMobileAlt className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="Mobile App Development"
            description="We create high-performance mobile applications for iOS and Android that deliver smooth and engaging user experiences."
          >
            {" "}
          </Card>
          <Card
            icon={
              <FaPaintBrush className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="UI/UX Design"
            description="We design intuitive and engaging interfaces that improve usability, strengthen your brand, and keep users coming back."
          />
          <Card
            icon={
              <FaCloud className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="Cloud Solutions"
            description="We help businesses adopt, manage, and optimize cloud technologies for better performance, flexibility, and scalability."
          />
          <Card
            icon={
              <FaRobot className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="AI Solutions"
            description="We develop AI-powered solutions that automate processes, improve efficiency, and help businesses make smarter decisions."
          />
          <Card
            icon={
              <FaUserTie className="text-3xl text-blue-600 group-hover:text-white" />
            }
            title="IT Consulting"
            description="We provide practical technology guidance to help businesses solve challenges, reduce costs, and accelerate digital transformation."
          />
        </div>
      </section>
      <Process />
    </>
  );
};

export default Services;
