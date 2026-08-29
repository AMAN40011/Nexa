import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ServiceMain = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-8 py-20 pb-10 bg-gradient-to-r from-transparent via-blue-50 to-transparent ">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <div className="w-full md:w-1/2   text-center md:text-left">
          <h4 className="font-bold text-xl text-blue-600 ">OUR SERVICE</h4>

          <h2 className='mt-3 text-4xl md:text-6xl font-bold  leading-tight tracking-tight" '>
            Digital Solutions <br /> Built Around Your{" "}
            <span className="text-blue-600">Business</span>{" "}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We deliver modern, scalable, and user-focused digital solutions{" "}
            <br />
            that help businesses innovate, grow, and stay ahead <br /> in a
            competitive digital world.
          </p>
           <Link to="/pricing">
             <Button className="mt-8">Explore Our Services →</Button>
           </Link>
        
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0  overflow-hidden rounded-xl">
          <img
            src="/Service2.png"
            alt="Digital solutions"
            className="float-animation object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;
