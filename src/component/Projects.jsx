import React from "react";
import Circle from "./Circle";
import { Link } from "react-router-dom";
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
        <div className="h-48 bg-black flex justify-between p-4">
          <div
            className="logo"
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
            <div className="projectName font-mono font-bold text-6xl m-7 text-center">
              {res.proName}
            </div>
            {/* main container */}
            <div className="flex flex-row items-center justify-around">
              {/* img */}
              <div className="h-96 w-full bg-black m-1" id="img-project">
                {Array.isArray(res.img) && res.img.length > 0 ? (
                  res.img.map((imgUrl, index) => (
                    <img
                      key={index}
                      src={imgUrl}
                      alt={`Project ${res.proName} Image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>

              {/* description */}
              <ul className="list-disc pl-6 mt-4">
                {Array.isArray(res.discription) ? (
                  res.discription.map((desc, i) => (
                    <li
                      key={i}
                      className="text-base leading-6 mb-2 hover:translate-x-1 transition-transform duration-200 ease-in-out"
                    >
                      {desc}
                    </li>
                  ))
                ) : (
                  <li className="text-base leading-6">{res.discription}</li>
                )}
              </ul>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            className="items-end hover:text-black z-50"
            onMouseEnter={enterEffect}
            onMouseLeave={leaveEffect}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
