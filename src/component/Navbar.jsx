import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full  text-black px-4 font-mono p-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-black" : "")}
      >
        <li>Home</li>
      </NavLink>

      <div className=" flex space-x-5 text-gray-600 ">
        <NavLink
          to={"/About"}
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          <li>About</li>
        </NavLink>

        <div className="dropdown cursor-pointer">
          <li>Work</li>

          <div class="dropdown-content">
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to={"/Work"}
            >
              hii
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <li>Projects</li>

          <div class="dropdown-content">
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to={"/Projects"}
            >
              hii2
            </NavLink>
          </div>
        </div>

        <NavLink
          className={({ isActive }) => (isActive ? "text-black" : "")}
          to={"/Contact"}
        >
          <li>Contact</li>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
