import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">About us</h2>
      <p className="mt-4 text-gray-600 text-center">
        We create modern digital solutions that help businesses grow.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        <div className="w-full md:w-1/2  text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            We Build Digital Experiences
          </h3>
          <p className="mt-4 text-gray-600">
            Our team creates modern and reliable digital solutions for
            businesses.
          </p>
          <Button className="mt-6">Learn More</Button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/about1.jpg"
            alt="About"
            className=" w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
