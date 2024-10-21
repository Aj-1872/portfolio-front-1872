import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black h-fit">
      <div className="text-white text-center mt-20 font-serif">
        <h1 className="text-7xl font-bold mb-8 underline" id="co-op">
          Co-op
        </h1>

        <div className="text-5xl font-bold space-y-8" id="co-op-ex"></div>

        <h1 className="text-7xl font-bold mt-20 mb-8 underline" id="part-time">
          Part-time Job
        </h1>

        <div className="text-5xl font-bold" id="part-time-ex"></div>
      </div>
    </div>
  );
};

export default Experience;
