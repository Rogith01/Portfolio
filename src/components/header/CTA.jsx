import React from "react";
import CV from "../../assets/Rogith-Resume.pdf";
import { FaDownload } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <FaDownload></FaDownload>
      </a>
    </div>
  );
};

export default CTA;