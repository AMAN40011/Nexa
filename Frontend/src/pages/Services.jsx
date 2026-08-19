import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-12 gap-6">
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaLaptopCode className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>
          <p className="mt-3 text-gray-600">
            We build fast, responsive, and modern web applications.
          </p>
        </div>
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Card 2
        </div>
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Card 3
        </div>
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Card 4
        </div>
      </div>
    </section>
  );
};

export default Services;
