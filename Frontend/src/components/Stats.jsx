import React from "react";
import { FaProjectDiagram, FaUsers, FaBriefcase, FaStar } from "react-icons/fa";

const Stats = () => {
  const stats = [
    { value: "120+", label: "Projects", icon: <FaProjectDiagram /> },
    { value: "50+", label: "Clients", icon: <FaUsers /> },
    { value: "3+", label: "Experience", icon: <FaBriefcase /> },
    { value: "98%", label: "Satisfaction", icon: <FaStar /> },
  ];

  return (
    <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center md:text-left">
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-2">
            <div className="w-12 h-12 mb-2 md:mb-0 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
              {stat.icon}
            </div>

            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
