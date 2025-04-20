import React from "react";
import "./about.css";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__cards-section">
          <div className="about__cards">
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Tech computer Science & Business Systems
                <br />
                Sri Sairam Engineering College
              </small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Internship</h5>
              <small>
                Junior Software trainee (June 2024 - JUly 2024)
              </small> <br />
              <small>
                Eagle-HiTech Softclou Private Limited
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                5+ Projects Completed
                <br />
                Projects source code in <a href="https://github.com/Rogith01">Github</a>
              </small>
            </article>
          </div>
        </div>
        <div className="about__content">
          <p>
          I am a web developer with a strong passion for creating engaging and efficient web applications. I thrive on working with cutting-edge web technologies and have a particular love for projects that allow me to explore and innovate in the frontend space. My expertise spans Html,Css,JavaScript,React,Node,Git,Vs Code which I use to develop user-friendly interfaces.I'm especially passionate about React development and have completed several projects in this framework.This allows me to experiment with new ideas and continuously improve my skills. I enjoy crafting seamless user experiences and am always eager to take on new challenges that push the boundaries of web development.
          </p>
        </div>
        <div className="btn-container">
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;