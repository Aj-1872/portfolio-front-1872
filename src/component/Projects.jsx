import React from "react";
import Circle from "./Circle";
import { Link } from "react-router-dom";
import lionimg from "../assests/lion.jpg";
import { useEffect, useState } from "react";

const Projects = ({ enterEffect, leaveEffect, circleRef }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/project");
        const result = await res.json();
        setdata(result);
        console.log(result);
      } catch (error) {
        console.error("error while fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Circle ref={circleRef} />

      <div className="navbar">
        <div className="h-48 bg-black sticky flex justify-between p-4">
          <div
            className="logo z-40"
            id="Logo"
            onMouseEnter={enterEffect}
            onMouseLeave={leaveEffect}
          >
            <Link to="/">Aj</Link>
          </div>

          <div
            className="profile z-40"
            onMouseEnter={enterEffect}
            onMouseLeave={leaveEffect}
          >
            <Link to="/profile">PROFILE</Link>
          </div>
        </div>
      </div>

      <div className="container-project-name m-auto self-center w-4/5 h-fit">
        {data.map((res, index) => (
          <div key={index}>
            {/* heading */}
            <div className="projectName font-mono font-bold text-6xl m-0 text-center">
              {res.proName}
            </div>
            {/* main container */}
            <div className="flex flex-row items-center justify-around">
              {/* img */}
              <div className="h-96 w-full bg-black m-1" id="img-project">
                <img
                  src={res.img}
                  alt={`Project ${res.proName}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* description */}
              <ul className="h-96 w-full m-1">
                {Array.isArray(res.discription) ? (
                  res.discription.map((desc, i) => (
                    <li key={i} className="mb-2">
                      {desc}
                    </li> // Add margin-bottom to create space between lines
                  ))
                ) : (
                  <li>{res.discription}</li> // Fallback if discription is not an array
                )}
              </ul>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button className="items-end">More</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
