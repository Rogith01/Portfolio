import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/IMG3.png"
import IMG2 from "../../assets/IMG2.png"
import IMG1 from "../../assets/IMG1.png"
import IMG4 from "../../assets/IMG4.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Vigilant View",
    tools:"AIML | YOLO | OPEN CV | SQL",
    github: "https://github.com/Rogith01/Vigilant-View.git",
    demo: "https://github.com/Rogith01/Vigilant-View.git",
  },
  {
    id: 2,
    image: IMG2,
    title: "Click Shop Online - E-commerce",
    tools:"HTML | CSS | JAVASCRIPT",
    github: "https://github.com/Rogith01/Ecommerce_Website-ETS-Internship.git",
    demo: "https://click-shop-online.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Invoice-Bill-Generator",
    tools:"REACT.JS",
    github: "https://github.com/Rogith01/invoice-generator.git",
    demo: "https://invoice-rogith.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "AI-Chatbot",
    tools:"Python",
    github: "https://github.com/Rogith01/chatbot.git",
    demo: "https://github.com/Rogith01/chatbot.git",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on <a href="https://github.com/Rogith01">Github</a></h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title,tools, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} <br /> {tools}</h3>
              
              <div className="portfolio__item-cta">
                <a href={github} className="btn" >
                Github
                </a>
                <a href={demo} className="btn">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
