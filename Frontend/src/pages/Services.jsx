import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import Card from "../components/Card";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-12 gap-6">
        <Card
          icon={
            <FaLaptopCode className="text-3xl text-blue-600 group-hover:text-white" />
          }
          title="Web Development"
          description="We build fast, responsive, and modern web applications."
        />
        <Card
          icon={
            <FaMobileAlt className="text-3xl text-blue-600 group-hover:text-white" />
          }
          title="Mobile Development"
          description="We create modern and responsive mobile applications."
        >  </Card>
        <Card
          icon={
            <FaPaintBrush className="text-3xl text-blue-600 group-hover:text-white" />
          }
          title="UI/UX Design"
          description="We design clean and engaging digital experiences."
        />
        <Card
          icon={
            <FaCloud className="text-3xl text-blue-600 group-hover:text-white" />
          }
          title="Cloud Solutions"
          description="We provide scalable and reliable cloud solutions."
        />
      </div>
    </section>
  );
};

export default Services;
