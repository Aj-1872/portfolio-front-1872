import React, { useEffect, useState } from "react";

const Experience = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/experience");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-black flex flex-col justify-center items-center bg-gradient-to-b py-10 font-sans experience-body">
      {/* {data.map((res, index) => (
        <div
          key={index}
          className="bg-black rounded-lg shadow-lg p-8 m-5 text-white text-center transition transform hover:scale-105 relative"
        >
        <h1 className="text-6xl font-bold mb-4 underline" >
        {res.type}
        </h1>
          <p className="text-3xl font-medium space-y-2" >
          {res.description}
          </p>
          <div className="absolute bottom-4 right-4">
          <button className="text-blue-300 font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105">
          More
          </button>
          </div>
          </div>
          ))} */}

      <div className=" relative w-4/5 h-full rounded-md bg-gray-800 flex flex-row p-5">
        <div className="flex flex-col  h-full w-1/4 rounded-md mr-4  ">
          {data.map((res, index) => (
            <div
              className=" m-1 p-2 h-1/5 w-full rounded-md shadow-2xl stransition-transform transform hover:scale-105 overflow-hidden"
              key={index}
            >
              <h1 className={`${res.color} text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis`}>
                {res.type}
               
              </h1>
              <p className="text-gray-400 text-sm font-thin">
                {res.description}
              </p>
              <div className=" relative top-4">
                <img src={res.image} className="h-12 rounded-full" alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-full rounded-md bg-black "> </div>
      </div>
    </div>
  );
};

export default Experience;
