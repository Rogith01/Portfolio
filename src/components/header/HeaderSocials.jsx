import React from "react";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaMailBulk } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rogith-a-30564b257">
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rogith01">
        <FaGithub />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://x.com/Ak_Rogith?t=E4D-3QAZ-44ClYFwwji08A&s=09">
        <BsTwitter />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="Mailto:akrogith777@gmail.com">
        <FaMailBulk />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919629314051/?text=Hi!">
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;