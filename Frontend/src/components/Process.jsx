import React from "react";

import Button from "./Button";
import {
  FaUsers,
  FaLightbulb,
  FaGear,
  FaPaperPlane,
  FaChartLine,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Process = () => {
  const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, challenges, and audience.",
    icon: FaUsers,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the strategy, scope, and roadmap for your project.",
    icon: FaLightbulb,
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "We design and build solutions with quality, performance, and precision.",
    icon: FaGear,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We test, launch, and deliver solutions that work flawlessly.",
    icon: FaPaperPlane,
  },
  {
    number: "05",
    title: "Support & Grow",
    description:
      "We provide ongoing support and help your business scale further.",
    icon: FaChartLine,
  },
];

  return (
    <section id="Process" className="max-w-7xl mx-auto px-8 py-20 ">
      <div className="flex flex-col justify-between items-center max-w-3xl mx-auto">
        <h4 className="text-blue-600 font-semibold">OUR PROCESS</h4>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          A Proven Process That{" "}
          <span className="text-blue-600">Delivers Results</span>
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          We follow a clear and collaborative approach to turn your ideas into
          successful digital solutions.
        </p>
      </div>


      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {process.map((item) => (
        
        <div key={item.number} className="text-center cursor-pointer">


           <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center shadow-sm hover:scale-105 transition-all duration-300 ">
            <item.icon size={32} className="text-blue-600"/>
            </div>  
          
          <p className="mt-5 text-blue-600 font-semibold">
            {item.number}
          </p>

          <h3 className="mt-2 text-lg font-semibold">{item.title}

          </h3>

          <p className="mt-2 text-gray-600 leading-relaxed">
            {item.description}
          </p>

        </div>


      ))}
      </div>
      



      <div className="mt-10 relative mt-5 px-8 py-8 bg-gradient-to-br from-indigo-900 via-blue-700 to-blue-400 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
        <div className="w-14 h-14 flex items-center justify-center border rounded-full bg-gradient-to-tl from-blue-500 via-blue-800 to-blue-500">
          <FaPaperPlane size={25} className="text-white" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-xl">
            Ready to Start Your Next Project?
          </h2>

          <p className="text-white">
            Let's turn your idea into powerful digital solutions.
          </p>
        </div>

        <div className="md:ml-auto">
          <Link to="/contact#form">
            <Button variant="secondary">Get in Touch →</Button>
            </Link>
        
        </div>
      </div>
    </section>
  );
};

export default Process;
