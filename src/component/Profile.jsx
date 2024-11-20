import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import Skill from "./Skill";
import Certificates from "./Certificates";
import Education from "./Education";
import Circle from "./Circle";

const Profile = ({ circleRef }) => {
  return (
    <>
      <Circle ref={circleRef} />
      <div id="profile-body" className="bg-black overflow-y-auto -z-40">
        <div className="w-4/5 m-auto self-center p-14">
          <div className=" rounded-lg shadow-md">
            <div className="mb-4">Hi there :)</div>
            <div className="mb-4">
              I’m a software developer and network engineer based in Canada.
            </div>
            <div className="mb-4">
              {" "}
              I’ve been working in the tech industry for two years while being a
              student at Sheridan College. My experience includes co-op work
              that has given me hands-on skills in web development and software
              projects.{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              I am inspired by the rapidly evolving tech industry. With a
              creative mindset and a passion for drawing and crafts, I chose
              this field to blend my creativity with technology.{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              My current professional goal is to become a software developer at
              an innovative startup where I can contribute to growth and gain
              deeper experience.{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              Recently, I’ve been dedicating my time to building projects,
              learning new technologies, sketching, and maintaining a balanced
              lifestyle through gym workouts and self-cooking.{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              I’ve developed a variety of skills, including effective
              communication and logical problem-solving through brainstorming.
              Learning from my mistakes has been essential, and I've also
              cultivated self-control through yoga and intermittent fasting.{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              My journey started as a student at Sheridan College, where I was
              introduced to the fundamentals of web development. From there, I
              continued to learn through online courses and YouTube tutorials,
              expanding my technical expertise.{" "}
            </div>
          </div>
        </div>

        <Skill />
        <Experience />
        <Certificates />
        <Education />
      </div>
    </>
  );
};

export default Profile;
