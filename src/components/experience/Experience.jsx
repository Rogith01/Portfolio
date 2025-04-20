import React from "react";
import "./experience.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaScrewdriver } from "react-icons/fa";




const Experience = () => {
  return (
    <section id="experience">
      <h5>Check out</h5>
      <h2>My skills</h2>
      <div className="container experience__container">
      <div className="experience__programinglanguage">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaBug className="experience__details-icon" />
              <div>
                <h4>C</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaBug className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaBug className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaBug className="experience__details-icon" />
              <div>
                <h4>OOPS (Java)</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>
        <div className="experience__frontend">
          <h3>Full Stack Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>My SQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Business Analysis Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Power BI</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>My SQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Tableau</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaLaptopCode className="experience__details-icon" />
              <div>
                <h4>Microsoft Excel</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools & Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaScrewdriver className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaScrewdriver className="experience__details-icon" />
              <div>
                <h4>Vs Code</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaScrewdriver className="experience__details-icon" />
              <div>
                <h4>Netlify</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaScrewdriver className="experience__details-icon" />
              <div>
                <h4>Vercel</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Experience;
