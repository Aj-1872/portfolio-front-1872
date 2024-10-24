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
    <div className="bg-black flex flex-col justify-center items-center bg-gradient-to-b h-fit py-10 font-sans">
      {data.map((res, index) => (
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
      ))}
    </div>
  );
};

export default Experience;
