import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { FaChevronCircleDown } from "react-icons/fa";

const Header = () => {


  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h5>Welcome , I'm</h5>
          <h1>ROGITH</h1>
          <h4>Designing the future, one interface at a time.</h4>
          
          <CTA />
          <br />
          <div className="header__socials-container">
            <HeaderSocials />
          </div>

        </div>
        <a href="#about" className="scroll__down">
          <FaChevronCircleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;