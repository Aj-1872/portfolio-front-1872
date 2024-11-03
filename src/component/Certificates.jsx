import React, { useEffect } from "react";
import { useState } from "react";

const Certificates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/certificate");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        id="certificate"
        className="w-4/5 m-auto self-center pt-20 font-serif italic text-3xl"
      >
        CERTIFICATES
      </div>

      <div className="outer mt-14 mb-10">
        <div className="line"></div>
      </div>

      <div id="certificates-body" className="w-4/5 m-auto self-center  ">
        {data.map((res, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-md rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:bg-black"
          >
            <div className="text-lg font-bold  mb-1">{res.cerName}</div>
            <div className="text-sm  mb-2">{res.date}</div>
            <div className="text-base ">{res.discription}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
