import React from "react";
import "../style/Home.css";
import { Outlet, Link } from "react-router-dom";
import Circle from "./Circle";

const Home = ({ bgColor, circleRef }) => {
  const enterEffect = () => {
    circleRef.current.style.backgroundColor = "white";

    circleRef.current.style.zIndex = "-1";
    circleRef.current.style.height = "100px";
    circleRef.current.style.width = "100px";
  };
  const leaveEffect = () => {
    circleRef.current.style.backgroundColor = "transparent";
    circleRef.current.style.height = "50px";
    circleRef.current.style.width = "50px";
    circleRef.current.style.zIndex = "10";
  };

  return (
    <>
      <div className={`main-body bg-${bgColor}`}>
        <Circle ref={circleRef} />

        <div className="opacity-70" id="background-img"></div>

        <div
          className="logo"
          id="Logo"
          onMouseEnter={enterEffect}
          onMouseLeave={leaveEffect}
        >
          Aj
        </div>

        <div
          className="profile"
          onMouseEnter={enterEffect}
          onMouseLeave={leaveEffect}
        >
          <Link to="/profile">PROFILE</Link>
        </div>

        <div
          className="projects"
          onMouseEnter={enterEffect}
          onMouseLeave={leaveEffect}
        >
          <Link to="/project">PROJECT</Link>
        </div>

        <div className="name">AJAY ODEDARA</div>
        <div className="pass">SOFTWARE DEVELOPER AND NETWORK ENGINEERING</div>
        <div className="canada">(BASED IN CANADA)</div>
      </div>
    </>
  );
};

export default Home;
