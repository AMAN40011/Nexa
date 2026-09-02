import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShieldAlt, FaHistory, FaEnvelope } from "react-icons/fa";

const ProfileSidebar = () => {
  const menuItems = [
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Security",
      path: "/profile/security",
      icon: <FaShieldAlt />,
    },
    {
      name: "Activity",
      path: "/profile/activity",
      icon: <FaHistory />,
    },
    {
      name: "Message",
      path: "/profile/message",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <aside className="bg-white rounded-2xl shadow-sm border p-5 h-fit">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">My Account</h2>

        <p className="text-sm text-gray-500 mt-1">Manage your account</p>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default ProfileSidebar;
