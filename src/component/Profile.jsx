import React, { useState, useEffect } from 'react';
import Experience from './Experience';
import Skill from './Skill';

const Profile = ({ circleRef }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <>
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

      <div className="text-black bg-white h-fit ">
        <Experience />
        <Skill/>
      </div>
    </>
  );
};

export default Profile;
