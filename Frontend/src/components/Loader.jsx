import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export default Loader;
