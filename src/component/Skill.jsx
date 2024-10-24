import React from "react";
import { useEffect, useState } from "react";

const Skill = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/skill");
        const result = await res.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="outer">
        <div className="line"></div>
      </div>

      <div className="w-4/5 m-auto self-center p-14 pb-8 font-serif italic text-3xl">
        what can i do
      </div>

      {data.map((res, index) => (
        <div
          id="field"
          className="w-4/5 m-auto self-center font-serif pl-14 "
          key={index}
        >
          {res.field}
        </div>
      ))}

      <div className="outer mt-14">
        <div className="line"></div>
      </div>

      <div className="w-4/5 m-auto self-center p-14 pb-8 font-serif italic text-3xl">
        skills
      </div>
      {data.map((res, index) => (
        <div
          id="field"
          className="w-4/5 m-auto self-center font-serif pl-14 "
          key={index}
        >
          {res.skills}
        </div>
      ))}

      <div className="outer mt-14">
        <div className="line"></div>
      </div>
    </>
  );
};

export default Skill;
