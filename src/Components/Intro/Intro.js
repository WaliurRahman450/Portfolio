import React from "react";
import "./Intro.css";
import bg from "./bg.jpeg";
import { Link } from "react-scroll";
import { BsBriefcaseFill } from "react-icons/bs";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm
          <span className="introName"> Waliur</span>
          <br />
          Website Designer
        </span>
         <p className="introPara">
            I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites. </p>

        <Link>
        <button className="btn"> <BsBriefcaseFill style={{position:'relative',top:'0.09rem'}}></BsBriefcaseFill> Hire me</button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
