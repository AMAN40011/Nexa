import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaHistory, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activity = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/activity`,
          {
            withCredentials: true,
          },
        );

        if (response.data.success) {
          setActivities(response.data.activities);
        }
      } catch (error) {
        toast.error("Failed To load activities");
      }
    };

    activity();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <FaHistory className="text-blue-600 text-xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Account Activity
            </h2>

            <p className="text-gray-500 mt-1">
              View your recent account activity
            </p>
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Recent Activity
        </h3>

        <div className="space-y-6">
          {/* Login */}

          {/* Signup */}
          {activities.map((act) => (
            <div key={act._id} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FaHistory className="text-blue-600" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">{act.action}</p>

                <p className="text-sm text-gray-500">{act.description}</p>

                <p className="text-xs text-gray-400 mt-1">
                  {new Date(act.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
