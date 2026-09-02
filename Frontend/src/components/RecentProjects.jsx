import React from "react";
import { Link } from "react-router-dom";
const RecentProjects = () => {
  const projects = [
    {
      title: "Car Rental Platform",
      description:
        "A full-stack car rental platform where users can browse cars, view details, and manage rental bookings.",
      image: "/carrental.png",
      link: "https://car-rental-project-gules.vercel.app/",
    },
    {
      title: "RedStore E-Commerce Platform",
      description:
        "A modern sportswear e-commerce platform for browsing products and managing an online shopping experience.",
      image: "/Redstore.png",
      link: "https://aman40011.github.io/Ecommerce-Website/",
    },
    {
      title: "Task Manager",
      description:
        "A task management application that helps users organize, track, and manage their daily tasks.",
      image: "/TaskManager.png",
      link: "https://task-manager-41tz-nine.vercel.app/",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Recent Projects</h1>
        <p className="mt-4 text-gray-400">
          Take a look at some of the digital solution we've built.
        </p>
      </div>
      <div className="mt-12 grid gird-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-xl border bg-white shadow-md hoverhover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-gray-600">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
