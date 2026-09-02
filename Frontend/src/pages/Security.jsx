import React, { useState } from "react";
import { FaLock, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
const Security = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [checkNewPass, setcheckNewPass] = useState("");

  const security = async (e) => {
    e.preventDefault();

    try {
      if (!currentPass || !newPass || !checkNewPass) {
        toast.error("Please fill all fields");
        return;
      }

      if (newPass !== checkNewPass) {
        toast.error("Password is not matching with new pass");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/security`,
        {
          currentPass,
          newPass,
        },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        toast.success("Password Changed Successfully!");
        setCurrentPass("");
        setNewPass("");
        setcheckNewPass("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <FaShieldAlt className="text-blue-600 text-xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Security</h2>

            <p className="text-gray-500 mt-1">Manage your account security</p>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaLock className="text-blue-600" />

          <h3 className="text-xl font-bold text-gray-900">Change Password</h3>
        </div>

        <div className="space-y-5 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>

            <input
              type="password"
              value={currentPass}
              placeholder="Enter current password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              onChange={(e) => setCurrentPass(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>

            <input
              type="password"
              value={newPass}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>

            <input
              type="password"
              value={checkNewPass}
              placeholder="Confirm new password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              onChange={(e) => setcheckNewPass(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={security}
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Account Security */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-5">
          Account Security
        </h3>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <FaShieldAlt className="text-green-600" />
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Your account is secure
            </p>

            <p className="text-sm text-gray-500">
              Your account is protected with password authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
