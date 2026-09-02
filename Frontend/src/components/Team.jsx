import React from "react";
import { FaUser } from "react-icons/fa";
const Team = () => {
  const teams = [
    {
      name: "Aman Pal",
      position: "CEO & Founder",
      image: "/boy1.png",
      twitter: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      image: "/girl1.png",
      twitter: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
    {
      name: "Rahul Singh",
      position: "Lead Developer",
      image: "/boy2.png",
      twitter: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
    {
      name: "Neha Patel",
      position: "UI/UX Designer",
      image: "/girl2.png",
      twitter: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  ];

  return (
    <section id="team" className="max-w-7xl mx-auto px-8 py-20 ">
      <div className=" flex flex-col max-w-2xl mx-auto text-center">
        <div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-500 rounded-2xl font-semibold">
            {" "}
            <FaUser className="inline-flex" size={14} /> Meet Out Team
          </span>
        </div>
        <h2 className="mt-5 text-4xl md:text-4xl font-bold">
          The Minds Behind <span className="text-blue-600">NexaTech</span>
        </h2>
        <p className="mt-4 text-gray-600">
          A team of professionals dedicated to delivering the best digital
          solutions.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teams.map((team) => (
          <div
            key={team.image}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full ">
              <img
                src={team.image}
                alt="Team_images"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="">
              <h3 className="font-semibold">{team.name}</h3>
              <p className="text-gray-600">{team.position}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={team.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/twitter_logo.svg"
                    alt="Twitter"
                    className="w-5 h-5 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
                  />
                </a>

                <a
                  href={team.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram_logo.svg"
                    alt="Instagram"
                    className="w-5 h-5 object-contain opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-200"
                  />
                </a>

                <a href={team.email} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/gmail_logo.svg"
                    alt="Email"
                    className="w-5 h-5 object-contain opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
