import React, { useRef } from "react";
import "./Contact.css";
import fb from "./fb.svg";
import git from "./github.png";
import linkedin from "./linkedin.svg";
import whatsapp from "./whatsapp.svg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log("hello");
    e.preventDefault();

    emailjs
      .sendForm("service_v8t9y7q", "template_bir0q7h", form.current, {
        publicKey: "3WEw-hPucSXhT85sg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Your email has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="academics">
        <h1>Educational Background</h1>
        <div className="academic">
            <ul>
                <li>DEGREE</li>
                <li>INSTITUTE</li>
                <li>GRADE</li>
            </ul>
            <ul>
                <li>SSC</li>
                <li><a href="http://www.sarsgss.edu.bd/" rel="noopener noreferrer" target="_blank"  style={{color:'yellow'}}>SARSGSS</a></li>
                <li>GPA 5.00</li>
            </ul>
            <ul>
                <li>HSC</li>
                <li><a href="https://ndc.edu.bd/" rel="noopener noreferrer" target="_blank" style={{color:'yellow'}}>Notre Dame College,Dhaka</a></li>
                <li>GPA 5.00</li>
            </ul>
            <ul>
                <li>BSc</li>
                <li><a href="https://www.butex.edu.bd/" rel="noopener noreferrer" target="_blank" style={{color:'yellow'}}>BUTex</a></li>
                <li>3rd Semester</li>
            </ul>
        </div>

      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill up the form below to discuss any opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/waliur.rahman.14203544/">
              <img src={fb} alt="" className="link" />
            </a>
            <a href="https://github.com/WaliurRahman450">
              <img src={git} alt="" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/waliur-rahman-311312247/">
              <img src={linkedin} alt="" className="link" />
            </a>
            <a href="https://wa.me/1857326760">
              <img src={whatsapp} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
