import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Profile Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 md:px-20 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          My <span className="text-blue-600">Account</span>
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your profile, security and account activity
        </p>
      </section>

      {/* Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <ProfileSidebar />

          {/* Page Content */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>

        </div>

      </div>

    </div>
  );
};

export default ProfileLayout;