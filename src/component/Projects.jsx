import React from "react";
import Circle from "./Circle";
import { Link } from "react-router-dom";

const Projects = ({ enterEffect, leaveEffect, circleRef }) => {
  return (
    <div>
      <Circle ref={circleRef} />

      <div className="navbar">
        <div
          className="relative text-white text-4xl font-semibold cursor-pointer hover:text-black"
          id="Logo"
          onMouseEnter={enterEffect}
          onMouseLeave={leaveEffect}
        >
          <Link to="/">Aj</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
