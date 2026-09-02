import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/me`,
          {
            withCredentials: true,
          },
        );

        if (response.data.success) {
          const currentUser = response.data.user;

          setUser(currentUser);
          setUsername(currentUser.username);
          setEmail(currentUser.email);
          setImagePreview(currentUser.profileImage || "");
        }
      } catch (error) {
        console.log("Error getting user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const EditProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user/update`,
        formData,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        toast.success("Profile Updated Successfully!");
        setUser(response.data.user);

        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
        setImagePreview(response.data.user.profileImage || "");
        setProfileImage(null);

        setIsEditing(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to Update Profile!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-blue-600 font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white rounded-2xl border p-8">
        <h2 className="text-xl font-bold text-gray-900">
          Unable to load profile
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUser className="text-blue-600 text-xl" />
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Profile Information
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Manage your personal information
            </p>
          </div>
        </div>

        <button
          className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          onClick={() => setIsEditing(true)}
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      {/* Divider */}
      <div className="border-t mt-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Avatar */}
          <div className="flex justify-center items-center">
            <label
              className={`w-36 h-36 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden ${
                isEditing ? "cursor-pointer" : ""
              }`}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUser className="text-blue-600 text-6xl" />
              )}

              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (file) {
                      setProfileImage(file);
                      setImagePreview(URL.createObjectURL(file));
                    }
                  }}
                />
              )}
            </label>
          </div>

          {/* User Information */}
          <div className="space-y-7">
            <div>
              <p className="text-sm text-gray-500">Username</p>

              {isEditing ? (
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder={user.username}
                />
              ) : (
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {user.username}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>

              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder={user.email}
                />
              ) : (
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {user.email}
                </p>
              )}
            </div>
            {isEditing && (
              <div className="mt-4 flex gap-5">
                <button
                  className="px-5 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 cursor-pointer"
                  onClick={() => setIsEditing(false)}
                >
                  cancel
                </button>
                <button
                  className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 cursor-pointer"
                  onClick={EditProfile}
                >
                  Save Changes
                </button>{" "}
              </div>
            )}

            <div>
              <p className="text-sm text-gray-500">Account Status</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

                <span className="font-semibold text-gray-900">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
