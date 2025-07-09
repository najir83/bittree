"use client";
import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-[#cdd1d6] min-h-screen p-8">
      <div className="relative lg:w-[25vw] mt-10 lg:mt-30 bg-white min-h-[80vh] flex flex-col pt-20 rounded-2xl shadow-gray-100 items-center mx-auto animate-pulse">
        {/* Handle */}
        <div className="absolute left-2 top-2 p-3 h-5 w-24 bg-gray-300 rounded-full"></div>

        {/* Profile Image + Name */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gray-300"></div>
          <div className="w-40 h-5 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Button */}
        <div className="pt-5 text-center">
          <div className="w-40 h-10 mt-5 bg-gray-200 rounded-lg mx-auto"></div>

          {/* Link placeholders */}
          <div className="flex flex-col pt-10 gap-5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-60 lg:w-80 h-12 bg-gray-200 rounded-2xl mx-auto"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
