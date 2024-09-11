import React from "react";
import backgroundImage from "../assests/img.jpg";

const Home = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      <div className="flex justify-between items-center w-full h-full px-10 py-10 z-10 m-16">
        {/* Left Section */}
        <div className="text-white text-left w-1/2 mx-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Crafting Solutions for the Modern Web
          </p>
        </div>

        {/* Right Section */}
        <div className="text-white text-right w-1/2 mx-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              1
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              2
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              3
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              4
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              5
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              6
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              7
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              8
            </div>
            <div className="bg-gray-800 p-4 aspect-square flex items-center justify-center">
              9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
