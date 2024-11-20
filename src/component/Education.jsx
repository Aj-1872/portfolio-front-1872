import React from "react";

const Education = () => {
  return (
    <div>
      <div
        id="education"
        className="w-4/5 m-auto self-center pt-20 font-serif italic text-3xl"
      >
        EDUCATION
      </div>
      <div className="outer mt-14 mb-10">
        <div className="line"></div>
      </div>

      <div className="w-4/5 m-auto self-center" id="education-body">
        <div className="mb-14">
          <h2 className="text-3xl font-semibold">Sheridan College</h2>
          <p className="mt-4 italic text-lg">
            Advanced Diploma in Software Development and Network Engineering
          </p>
          <p className="mt-2 text-md">January 2023 – December 2025</p>
          <p className="mt-1 text-md">Brampton, ON</p>
          <p className="mt-4 text-md leading-relaxed">
            Sheridan College is renowned for its forward-thinking approach to
            education, offering students a comprehensive learning experience
            that blends theory with hands-on practice. The Software Development
            and Network Engineering program equips students with in-depth
            knowledge in areas such as application development, network
            security, and system analysis.
          </p>
          <p className="mt-4 text-md leading-relaxed">
            This course has allowed me to enhance my technical abilities,
            critical thinking, and collaborative skills. I've engaged in
            building dynamic web applications, designing scalable databases, and
            developing software solutions for real-world problems.
          </p>
          <ul className="mt-6 list-disc list-inside space-y-2">
            <li>Web Application Design</li>
            <li>Software Engineering</li>
            <li>Machine Learning</li>
            <li>System Analysis and Design</li>
            <li>Database Management Systems</li>
          </ul>
        </div>

        <div className="mb-14">
          <h2 className="text-3xl font-semibold">Additional Courses</h2>
          <ul className="mt-6 list-disc list-inside space-y-2">
            <li>Open-Source Development</li>
            <li>Network Programming</li>
            <li>Operating Systems</li>
            <li>Generative AI Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
