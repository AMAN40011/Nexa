import React from "react";
import Loader from "./Loader";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Amazing Digital Solutions
          </h1>
           
          <p className="mt-6 text-lg text-gray-600">
            We help businesses grow with modern web applications, mobile
            solutions, and innovative digital experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-8">
           
            <Button className="hover:-translate-y-1
              transition-transform">Get Started</Button>

            
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="rounded-xl  w-full shadow-xl  hover:scale-105 transition-transform duration-300  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
