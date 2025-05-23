import React from "react";
import logo from "../assets/ns2.png";

import { FaLinkedin, FaGithub, FaInstagram, FaGitlab } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-4 w-16' src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nathalia-stilpen-940838218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NathaliaStilpen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://gitlab.com/NathaliaStilpen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitlab />
        </a>
        <a
          href="https://www.instagram.com/natystiilpen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
