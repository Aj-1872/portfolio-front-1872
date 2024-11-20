import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ enterEffect, leaveEffect }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="m-8 top-0 sticky z-40">
        <div className="flex items-center h-20 sticky">
          <div
            className="relative text-white text-4xl font-semibold cursor-pointer hover:text-black left-28"
            id="Logo"
            onMouseEnter={enterEffect}
            onMouseLeave={leaveEffect}
          >
            <Link to="/">Aj</Link>
          </div>

          <div className="flex flex-row justify-end items-center cursor-pointer space-x-20 ml-auto text-xl ">
            <div
              className="text-white hover:text-black"
              onMouseEnter={enterEffect}
              onMouseLeave={leaveEffect}
              onClick={() => scrollToSection("skill")}
            >
              Skills
            </div>
            <div
              className="text-white"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </div>
            <div
              className="text-white"
              onClick={() => scrollToSection("certificate")}
            >
              Certificates
            </div>
            <div className="text-white"
              onClick={() => scrollToSection("education")}
            
            >Education</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
