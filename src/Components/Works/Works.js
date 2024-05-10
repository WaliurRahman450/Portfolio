import React from "react";
import "./Works.css";
import img1 from "./panda.png";
import img2 from "./bank.png";
import img3 from "./cart.png";
import img4 from "./pin-matcher.png";
import img5 from "./shoe-shop.png";
import img6 from "./contact-us.png";
import img7 from "./hard-music.png";
import img8 from "./mosket.png";


const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and make sure
        that my works are pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImages">
        <div className="card">
          <a href="https://mosket.netlify.app/"><img src={img8} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://mosket.netlify.app/"><button className="redirect">Click to View</button></a>
        </div>
        
        <div className="card">
          <a href="https://contact-us-form-1.netlify.app/"><img src={img6} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://contact-us-form-1.netlify.app/"><button className="redirect">Click to View</button></a>
        </div>

        <div className="card">
         <a href="https://shoe-house-project.netlify.app/"> <img src={img5} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://shoe-house-project.netlify.app/"><button className="redirect">Click to View</button></a>
        </div>

        <div className="card">
          <a href="https://waliurrahman450.github.io/pinmatcher/"><img src={img4} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://waliurrahman450.github.io/pinmatcher/"><button className="redirect">Click to View</button></a>
        </div>

        <div className="card">
         <a href="https://waliurrahman450.github.io/Hard-Rock-Music/"> <img src={img7} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://waliurrahman450.github.io/Hard-Rock-Music/"><button className="redirect">Click to View</button></a>
        </div>

        <div className="card">
          <a href="https://waliurrahman450.github.io/shoppingcart/"><img src={img3} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://waliurrahman450.github.io/shoppingcart/"><button className="redirect">Click to View</button></a>
        </div>

        <div className="card">
          <a href="https://waliurrahman450.github.io/pioneer-bank/"><img src={img2} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://waliurrahman450.github.io/pioneer-bank/"><button className="redirect">Click to View</button></a>
        </div>
        
        <div className="card">
          <a href="https://waliurrahman450.github.io/pandacommerce/"><img src={img1} alt="" className="worksImage" /></a>
          <p>this project is made by html,css,javascript,react</p>
          <a href="https://waliurrahman450.github.io/pandacommerce/"><button className="redirect">Click to View</button></a>
        </div>
      </div>
      <button className="workBtn">See more</button>
    </section>
  );
};

export default Works;
