
import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/seiyalam.jpg";
import IMG2 from "../../assets/billqora.jpg";
import IMG3 from "../../assets/vigilant.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "SEIYALAM",
    subtitle: "Service Management Platform",
    tools: "REACT | REACT NATIVE | PYTHON | DJANGO REST | MYSQL",
    github: "https://github.com/Rogith01/SEIYALAM.git",
    demo: "https://seiyalam.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "BILLQORA",
    subtitle: "Multi-Store POS & Billing System",
    tools: "REACT | JAVASCRIPT | NODE.JS | MYSQL | ELECTRON",
    github: "https://github.com/Rogith01/invoice",
    demo: "https://billqora.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Vigilant View",
    subtitle: "Crime Activity Detection System",
    tools: "PYTHON | AI/ML | YOLO | OPENCV | SQL",
    github: "https://github.com/Rogith01/Vigilant-View.git",
    demo: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>
        Explore my projects on{" "}
        <a
          href="https://github.com/Rogith01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </h5>

      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, subtitle, tools, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            <h4 className="portfolio__subtitle">{subtitle}</h4>

            <p className="portfolio__tools">{tools}</p>

            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {demo && (
                <a
                  href={demo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
