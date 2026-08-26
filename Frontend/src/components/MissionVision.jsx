import React from "react";
import { FaRocket } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
const MissionVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
           <div className="flex gap-3 items-center">
             <FaRocket size={35} color="blue" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            </div> 
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our mission is to create innovative digital solutions that solve
          real-world problems and help businesses grow in a constantly changing
          digital world.
        </p>
        </div>
       
     
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex gap-3 items-center" >
           <FaBullseye className="text-blue-600" size={30}/><h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2></div>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our vision is to become a trusted technology partner that turns
          ambitious ideas into meaningful digital experiences.
        </p>
      </div>
       </div>
    </section>
  );
};

export default MissionVision;
