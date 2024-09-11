import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around w-full bg-black text-white px-4 font-mono p-4 text-xl shadow-md">

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-gray-500" : "")}
      >
        <li>Home</li>
      </NavLink>

      <div className=" flex space-x-5 text-white ">
        <NavLink
          to={"/About"}
          className={({ isActive }) => (isActive ? "text-gray-500" : "")}
        >
          <li>About</li>
        </NavLink>

        <div className="dropdown cursor-pointer">
          <li>Work</li>

          <div className="dropdown-content">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              to={"/Work"}
            >
              hii
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <li>Projects</li>

          <div className="dropdown-content">
            <NavLink
              className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              to={"/Projects"}
            >
              hii2
            </NavLink>
          </div>
        </div>

        <NavLink
          className={({ isActive }) => (isActive ? "text-gray-500" : "")}
          to={"/Contact"}
        >
          <li>Contact</li>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
