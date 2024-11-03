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
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="skill">
      <div className="w-4/5 m-auto self-center pt-14 pb-8 font-serif italic text-3xl">
        SKILLS
      </div>
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
        Skills
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

      <div className="w-4/5 m-auto self-center p-14 pb-8 font-serif italic text-3xl">
        Framworks
      </div>
      {data.map((res, index) => (
        <div
          id="field"
          className="w-4/5 m-auto self-center font-serif pl-14 "
          key={index}
        >
          {res.frameworks}
        </div>
      ))}

      <div className="outer mt-14">
        <div className="line"></div>
      </div>

      <div className="w-4/5 m-auto self-center p-14 pb-8 font-serif italic text-3xl">
        Tools
      </div>
      {data.map((res, index) => (
        <div
          id="field"
          className="w-4/5 m-auto self-center font-serif pl-14 "
          key={index}
        >
          {res.tools}
        </div>
      ))}

      <div className="outer mt-14">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Skill;
