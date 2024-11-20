import React from "react";
import Circle from "./Circle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Resume = ({ enterEffect, leaveEffect, circleRef }) => {
  return (
    <div>
      <Circle ref={circleRef} />

      <div className="navbar">
        <div className="h-48 bg-black flex justify-between p-4">
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
      <div className="bg-black text-white min-h-screen p-8">
        {/* Introduction Section */}

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hi there :)</h1>
          <p className="text-lg leading-relaxed">
            I’m a software developer and network engineer based in Canada. I’ve
            been working in the tech industry for two years while being a
            student at Sheridan College. My experience includes co-op work that
            has given me hands-on skills in web development and software
            projects.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I am inspired by the rapidly evolving tech industry. With a creative
            mindset and a passion for drawing and crafts, I chose this field to
            blend my creativity with technology. My current professional goal is
            to become a software developer at an innovative startup where I can
            contribute to growth and gain deeper experience.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Recently, I’ve been dedicating my time to building projects,
            learning new technologies, sketching, and maintaining a balanced
            lifestyle through gym workouts and self-cooking. I’ve developed a
            variety of skills, including effective communication and logical
            problem-solving through brainstorming. Learning from my mistakes has
            been essential, and I've also cultivated self-control through yoga
            and intermittent fasting.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">What can I do</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Web Development</li>
                <li>Java Development</li>
                <li>Full Stack Development</li>
                <li>Web Design</li>
                <li>Database Management</li>
                <li>Cloud Technologies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Skills</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React.js, Node.js</li>
                <li>Java</li>
                <li>C#, Python</li>
                <li>HTML, CSS, JavaScript</li>
                <li>PL/SQL, MongoDB</li>
                <li>AWS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Frameworks</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Express.js</li>
                <li>Spring Boot</li>
                <li>.NET</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Tools</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Git, Visual Studio Code, Docker, Kubernetes</li>
                <li>IntelliJ IDEA, Maven</li>
                <li>Visual Studio</li>
                <li>Figma, Adobe XD</li>
                <li>MySQL Workbench, MongoDB Compass</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">
              Intern at Samskrita Bharati
            </h3>
            <p className="italic">Full-stack Developer</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Designed and implemented engaging educational gaming experiences
                using HTML, CSS, JavaScript, React.js, and Node.js in a
                collaborative team environment.
              </li>
              <li>
                Contributed innovative ideas to enhance the effectiveness and
                user appeal of educational games.
              </li>
              <li>
                Gained practical experience in software development
                methodologies and best practices.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Intern at Skill Squirrel</h3>
            <p className="italic">Jr. Software Developer</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Developed backend applications with Java, utilizing IntelliJ
                IDEA and Git for version control.
              </li>
              <li>
                Improved unit test coverage and standardized application logging
                to enhance application reliability.
              </li>
              <li>
                Reviewed application configurations to standardize processes and
                eliminate duplications.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Part-Time at Walmart</h3>
            <p className="italic">Customer Service Representative</p>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Certificates</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Certified DevOps Professional – Issued by Ernest Mueller and James
              Wickett
            </li>
            <li>
              JavaScript Certification – Issued by Web Development Academy
            </li>
            <li>
              PHP Certification – Issued by Tech Skills Certification Centre
            </li>
            <li>Cisco Cybersecurity Certification – Issued by Cisco Systems</li>
            <li>Python Certification – Issued by LinkedIn Essential</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <h3 className="text-2xl font-semibold">Sheridan College</h3>
          <p className="italic">
            Advanced Diploma in Software Development and Network Engineering
          </p>
          <p className="mt-1">January 2023 – December 2025</p>
          <p className="mt-1">Brampton, ON</p>
          <p className="mt-4 leading-relaxed">
            Sheridan College is renowned for its forward-thinking approach to
            education, offering students a comprehensive learning experience
            that blends theory with hands-on practice. The Software Development
            and Network Engineering program equips students with in-depth
            knowledge in areas such as application development, network
            security, and system analysis.
          </p>
          <p className="mt-4 leading-relaxed">
            This course has allowed me to enhance my technical abilities,
            critical thinking, and collaborative skills. I've engaged in
            building dynamic web applications, designing scalable databases, and
            developing software solutions for real-world problems.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1">
            <li>Web Application Design</li>
            <li>Software Engineering</li>
            <li>Machine Learning</li>
            <li>System Analysis and Design</li>
            <li>Database Management Systems</li>
          </ul>
          <h4 className="text-xl font-semibold mt-4">Additional Courses</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Open-Source Development</li>
            <li>Network Programming</li>
            <li>Operating Systems</li>
            <li>Generative AI Development</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Urban Flow</strong> – A collaborative project creating an
              advanced traffic management system, featuring real-time data
              processing and user interfaces.
            </li>
            <li>
              <strong>Pet Rescue Charity Management</strong> – Developed scripts
              for donation data processing and integrated security measures.
            </li>
            <li>
              <strong>Angular Intro Project</strong> – Created a dynamic web
              application using Angular with responsive design features.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
