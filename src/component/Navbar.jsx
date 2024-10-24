import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ enterEffect, leaveEffect }) => {
  return (
    <>
      <div className="m-8">
        <div className="flex items-center h-20">

          <div
            className="relative text-white text-4xl font-semibold cursor-pointer hover:text-black left-28"
            id="Logo"
            onMouseEnter={enterEffect}
            onMouseLeave={leaveEffect}
          >
            <Link to="/">Aj</Link>
          </div>

          <div className="flex flex-row justify-end items-center space-x-20 ml-auto text-xl">
            <div className="text-white">Skills</div>
            <div className="text-white">Experience</div>
            <div className="text-white">Certificates</div>
            <div className="text-white">Education</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
