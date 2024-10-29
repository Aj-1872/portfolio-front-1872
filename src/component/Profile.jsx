import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import Skill from "./Skill";

const Profile = ({ circleRef }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
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

      <div  id="profile-body"  className="bg-black overflow-y-auto ">
        <div className="w-4/5 m-auto self-center p-14">
          <div className=" rounded-lg shadow-md">
            <div className="mb-4">Hi there :)</div>
            <div className="mb-4">
              I’m a software developer and network engineer based in Canada.
            </div>
            <div className="mb-4">
              I’ve been working in the web industry since 2022, and I’m always
              inspired by the great designs of websites created by creators from
              all over the world every day.
            </div>
            <div className="mb-4">
              created by creators from all over the world every day. My current
              goal is to win an award for my website.
            </div>

            <div className="mb-4">
              My recent interests are Jamstack and Shopify. I used to work as a
              salesperson in the apparel industry because I love fashion.
            </div>

            <div className="mb-4">
              Since I liked design, I taught myself Photoshop.
            </div>
            <div className="mb-4">
              After leaving the apparel industry, I became a customer support and
              web designer for a company that operated an e-commerce site, and
              also studied coding on my own.
            </div>

            <div className="mb-4">
              After that, I became an exclusive web designer and front-end
              engineer for a fashion trading company.
            </div>

            <div className="mb-4">
              Currently, I am working as a freelancer specializing in web
              production.
            </div>
          </div>
        </div>

        {/* Skill and Experience components */}
        <Skill />
        <Experience />
        
       
      </div>
    </>
  );
};

export default Profile;
