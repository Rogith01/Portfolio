
import React from "react";
import "./experience.css";

import {
  FaCode,
  FaDatabase,
  FaChartBar,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming & Web Development",
    icon: FaCode,
    skills: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "REST APIs",
    ],
  },
  {
    title: "Backend & Database",
    icon: FaDatabase,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "MySQL",
      "TiDB",
    ],
  },
  {
    title: "Business Analysis",
    icon: FaChartBar,
    skills: [
      "Power BI",
      "Microsoft Excel",
      "PowerPoint",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Netlify",
      "Render",
      "Postman",
      "EAS Build",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Explore my technical expertise</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon;

          return (
            <div className="experience__card" key={index}>
              <h3>{category.title}</h3>

              <div className="experience__content">
                {category.skills.map((skill) => (
                  <article className="experience__details" key={skill}>
                    <CategoryIcon className="experience__details-icon" />
                    <div>
                      <h4>{skill}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
