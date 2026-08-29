import React from "react";
import Button from "../components/Button";
import MissionVision from "../components/MissionVision";
import OurStory from "../components/OurStory";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20 mb-15 bg-gradient-to-r from-transparent via-blue-50 to-transparent">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Building <span className="text-blue-600">Digital </span> Experiences
          That Matter
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          We combine technology, creativity, and innovation to build digital
          solutions that help businesses grow.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-10">
          <div className="w-full md:w-1/2  text-center md:text-left">
          <h1 className="text-2xl font-bold">About Nexa<span className="text-blue-600">Tech</span> </h1>
            <h3 className="text-4xl md:text-4xl font-bold">
              We Turn Ideas Into Digital Solutions
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
             At NexaTech Solutions, we believe great technology starts with a great idea. We transform ideas into modern, reliable, and user-friendly digital solutions that help businesses grow, connect with their customers, and stay ahead in a constantly changing digital world.
            </p>
            <Button className="mt-6">Learn More</Button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/About11.png"
              alt="About"
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>
      <OurStory />
      <Team  />
      <MissionVision />
    </>
  );
};

export default About;
