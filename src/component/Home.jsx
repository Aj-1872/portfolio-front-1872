import React from "react";
import "../style/Home.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);
  const logoRef = useRef(null)



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
    logoRef.current.style.color = "black"
    circleRef.current.style.zIndex = '-1';
  }
  const leaveEffect =()=>{

    circleRef.current.style.backgroundColor = "transparent"
    logoRef.current.style.color = "white"
    
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

        <div className="background-img"></div>

        <div className="logo" id="Logo" ref={logoRef} onMouseEnter={enterEffect} onMouseLeave={leaveEffect}>
          Aj
        </div>

        <div className="profile" >PROFILE</div>
        <div className="projects" >PROJECTS</div>
        <div className="name">AJAY ODEDARA</div>
        <div className="pass">SOFTWARE DEVELOPER AND NETWORK ENGINEERING</div>
        <div className="canada">(BASED IN CANADA)</div>
      </div>
    </>
  );
};

export default Home;
