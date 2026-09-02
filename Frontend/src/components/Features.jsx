import React from "react";
import Card from "./Card";
import { FaLaptopCode, FaUsers, FaUserCheck } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Modern Technology",
      description:
        "We use modern technologies to build fast and reliable digital solutions.",
      link: "/services#Technologies",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      description:
        "Our team focuses on creating practical solutions that solve real business problems.",
      link: "/about#team",
    },
    {
      icon: <FaUserCheck />,
      title: "User Focused",
      description:
        "We design simple and intuitive experiences that users enjoy.",
      link: "/services#Process",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center max-w-2xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold ">Why Choose Us</h2>

        <p className="mt-4 text-gray-600">
          We build modern digital solutions that help businesses grow, innovate,
          and stay ahead.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
