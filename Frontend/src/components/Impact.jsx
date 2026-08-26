import React from 'react'
import {
  FaUsers,
  FaCode,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

const Impact = () => {

const stats = [
    {
      value: "50+",
      label: "Happy Clients",
      icon: <FaUsers />,
    },
    {
      value: "120+",
      label: "Projects Completed",
      icon: <FaCode />,
    },
    {
      value: "3+",
      label: "Years Experience",
      icon: <FaTrophy />,
    },
    {
      value: "4.9/5",
      label: "Client Rating",
      icon: <FaStar />,
    },
  ];

  return (
  <section className='max-w-7xl mx-auto px-8 py-16'>

    <div className='rounded-2xl bg-blue-50 px-8 py-10'>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Driving Success for Our Clients
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-4 p-6 ${
                index !== 0 ? "lg:border-l border-gray-300" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-blue-600">
                {stat.icon}
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {stat.value}
                </p>

                <p className="text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

    </div>

  </section>
  )
}

export default Impact
