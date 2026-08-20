import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-12 gap-6">
        <div className=" group border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600">
              <FaLaptopCode className="text-3xl text-blue-600 group-hover:text-white" />
            </div>

            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>
          <p className="mt-3 text-gray-600">
            We build fast, responsive, and modern web applications.
          </p>
        </div>
       <div className="group border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <div className="flex items-center gap-3">
    <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600">
      <FaMobileAlt className="text-3xl text-blue-600 group-hover:text-white" />
    </div>

    <h3 className="text-xl font-semibold">Mobile Development</h3>
  </div>

  <p className="mt-3 text-gray-600">
    We create modern and responsive mobile applications.
  </p>
</div>
        <div className="group border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <div className="flex items-center gap-3">
    <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600">
      <FaPaintBrush className="text-3xl text-blue-600 group-hover:text-white" />
    </div>

    <h3 className="text-xl font-semibold">UI/UX Design</h3>
  </div>

  <p className="mt-3 text-gray-600">
    We design clean and engaging digital experiences.
  </p>
</div>
         <div className="group border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <div className="flex items-center gap-3">
    <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600">
      <FaCloud className="text-3xl text-blue-600 group-hover:text-white" />
    </div>

    <h3 className="text-xl font-semibold">Cloud Solutions</h3>
  </div>

  <p className="mt-3 text-gray-600">
    We provide scalable and reliable cloud solutions.
  </p>
</div>
      </div>
    </section>
  );
};

export default Services;
