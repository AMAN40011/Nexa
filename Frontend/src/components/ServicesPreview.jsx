import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";
import Card from "./Card";

const ServicesPreview = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "We build fast, responsive, and modern web applications.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "We create modern and responsive mobile applications.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "We design clean and engaging digital experiences.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "We provide scalable and reliable cloud solutions.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>

        <p className="mt-4 text-gray-600">
          We provide modern digital solutions to help your business grow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
