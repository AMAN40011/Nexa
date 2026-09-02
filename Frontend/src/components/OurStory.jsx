import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
const OurStory = () => {
  const journey = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "NexaTech started with a simple goal — helping businesses turn their ideas into digital solutions.",
    },
    {
      year: "2024",
      title: "Growing Together",
      description:
        "We expanded our capabilities and worked on projects across different industries.",
    },
    {
      year: "2025",
      title: "Expanding Our Expertise",
      description:
        "We strengthened our expertise in modern web technologies and scalable digital products.",
    },
    {
      year: "2026",
      title: "Building What's Next",
      description:
        "We continue to create innovative solutions and build long-term partnerships with our clients.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 bg-gradient-to-r from-transparent via-blue-50 to-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Turning Ideas Into{" "}
            <span className="text-blue-600">Impactful Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Founded with a passion for technology and innovation, NexaTech
            Solutions helps businesses turn their ideas into powerful digital
            products.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 px-4 py-4 rounded-2xl shadow-md">
                <FaBullseye size={30} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="mt-1 text-gray-600">
                  To become a trusted technology partner for businesses building
                  meaningful digital experiences.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 px-4 py-4 rounded-2xl shadow-md">
                <FaRegHeart size={30} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Values</h3>
                <p className="mt-1 text-gray-600">
                  We value innovation, quality, transparency, and long-term
                  partnerships with our clients.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 px-4 py-4 rounded-2xl shadow-md">
                <FaHandshake size={30} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Approach</h3>
                <p className="mt-1 text-gray-600">
                  We combine thoughtful design, modern technology, and
                  collaboration to create practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full">
          <img
            src="/Mountain.png"
            alt="About"
            className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
      <div className="mt-20 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our <span className="text-blue-600">Journey</span>
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          From our beginnings to where we are today, every step has shaped the
          way we build and work.
        </p>

        <div className="border bg-gray-50 rounded-xl px-8 py-10 shadow-xl mt-10 ">
          <div className="space-y-8">
            {journey.map((item, index) => (
              <div key={item.year} className="relative flex gap-6">
                <div className="relative flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>

                  {index !== journey.length - 1 && (
                    <div className="absolute top-5 w-px h-full bg-gray-300"></div>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    {item.year}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
