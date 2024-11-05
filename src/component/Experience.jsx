import React, { useEffect, useState } from "react";

const Experience = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dataById, setDataById] = useState([]);
  const [id, setId] = useState("67196e8d8022eb3269029cbe");

  useEffect(() => {
    const fetchDataById = async () => {
      if (!id) return;

      try {
        const res = await fetch(`http://localhost:3000/experience/${id}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setDataById(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataById();
  }, [id]);

  const handleIdChange = (newId) => {
    setId(newId);
  };

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
    <>
      <div
        id="experience"
        className="w-4/5 m-auto self-center pt-20 font-serif italic text-3xl"
      >
        EXPERIENCE
      </div>
      <div className="outer mt-14 mb-10">
        <div className="line"></div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center bg-gradient-to-b py-10 font-sans experience-body">
        <div className=" relative w-4/5 h-full rounded-md bg-gray-900 flex flex-row p-5">
          <div className="flex flex-col  h-full w-1/4 rounded-md mr-4  ">
            {data.map((res, index) => (
              <div
                onClick={() => handleIdChange(res._id)}
                className=" m-1 p-2 h-1/5 w-full rounded-md shadow-2xl stransition-transform transform hover:scale-105 overflow-hidden"
                key={index}
              >
                <h1
                  className={`text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis ${res.color} `}
                >
                  {res.ComName}
                </h1>
                <p className="text-gray-400 text-sm font-thin">{res.role}</p>
                <div className=" relative top-4">
                  <img src={res.image} className="h-12 rounded-full" alt="" />
                </div>
              </div>
            ))}
          </div>

          <div className="h-full w-full rounded-md bg-black p-4 text-white shadow-lg transition-transform transform hover:scale-105 ">
            {dataById.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
