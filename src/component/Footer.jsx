import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white mt-16 h-40 flex-row bg-black">
      <div className="flex justify-center font-bold font-mono mt-4">
        <div className="ml-12 mr-12" ><Link to='/'>HOME</Link></div>
        <div className="ml-12 mr-12"><Link to='/project'>PROJECTS</Link></div>
        <div className="ml-12 mr-12"><Link to='/resume'>Resume</Link></div>
      </div>

      <div className="outer mt-8">
        <div className="line w-full border-t border-gray-200"></div>
      </div>

      <div className="social-media flex justify-center mt-4 space-x-8">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-2xl hover:text-blue-600"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-2xl hover:text-blue-400"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-2xl hover:text-pink-600"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-2xl hover:text-blue-700"
          />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white text-2xl hover:text-gray-400"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
