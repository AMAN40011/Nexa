import React from "react";
import Button from "./Button";
import Stats from "./Stats";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" max-w-7xl mx-auto px-8 py-12 md:py-8 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center py-0 md:py-12 md:mb-12">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            ✦ Modern Digital Solutions
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Build Digital Solutions{" "}
            <span className="text-blue-600">Powered by AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We help businesses grow with modern web applications, mobile
            solutions, and innovative digital experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <Link to="/contact">
              <Button className="shadow-md hover:shadow-lg hover:-translate-y-1  transition-transform duration-300">
                Get Started
              </Button>
            </Link>

            <Link to="/about">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
          <Stats />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0  overflow-hidden rounded-xl ">
          <img
            src="/hero1.png"
            alt="Hero"
            className="float-animation  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
