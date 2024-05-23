import React from "react";
import "./Skill.css";
import UiDesign from "./ui:ux.png";

import WebDesign from "./web:design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled passionate web designer with experience in creating
        visually appealing and user friendly websites. I have a strong
        understanding of design and a keen eye of detail. I am proficient in{" "}
        <span style={{ backgroundColor: "rgb(73,73,243" }}>
          HTML, CSS, BootStrap, JavaScript and ReactJs
        </span>
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UiDesign} alt="" className="skillBarImg" />
          <div className="skillBartText">
            <h2>UI/UX Design</h2>
            <ol className="services-list">
              <li>User-centric focus</li>
              <li>Streamlined interactions</li>
              <li>Intuitive interfaces</li>
              <li>Accessibility for all</li>
              <li>Pixel-perfect visuals</li>
            </ol>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBartText">
            <h2>Website Design</h2>
            <ol className="services-list">
              <li>Responsive & adaptable</li>
              <li>Optimized for performance</li>
              <li>SEO-friendly foundation</li>
              <li>User-friendly navigation</li>
              <li>Visually compelling design</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
