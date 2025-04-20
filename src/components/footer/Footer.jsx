import React from "react";
import "./footer.css";
import { BsLinkedin,BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        ROGITH
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
      <a href="https://github.com/Rogith01">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rogith-a-30564b257">
          <BsLinkedin />
        </a>
        <a href="https://x.com/Ak_Rogith?t=E4D-3QAZ-44ClYFwwji08A&s=09">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rogith 2024. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
