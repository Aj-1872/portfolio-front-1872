import React from "react";
import "../style/Home.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);



  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const enterEffect =()=>{
    circleRef.current.style.backgroundColor = "white"
    
    circleRef.current.style.zIndex = '-1';
    circleRef.current.style.height = "100px";
    circleRef.current.style.width = "100px";
  }
  const leaveEffect =()=>{

    circleRef.current.style.backgroundColor = "transparent"
    circleRef.current.style.height = "50px";
    circleRef.current.style.width = "50px";
  }


  return (
    <>
      <div className="main-body">

        <div
          
          ref={circleRef}
          className="circle"
          style={{
            position: "absolute",
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div className="opacity-70" id="background-img" ></div>

        <div className="logo" id="Logo"onMouseEnter={enterEffect} onMouseLeave={leaveEffect}>
          Aj
        </div>

        <div className="profile" onMouseEnter={enterEffect} onMouseLeave={leaveEffect} ><Link to="/profile">Profile</Link></div>
        <div className="projects" onMouseEnter={enterEffect} onMouseLeave={leaveEffect} >PROJECTS</div>
        <div className="name">AJAY ODEDARA</div>
        <div className="pass">SOFTWARE DEVELOPER AND NETWORK ENGINEERING</div>
        <div className="canada">(BASED IN CANADA)</div>
      </div>
    </>
  );
};

export default Home;
