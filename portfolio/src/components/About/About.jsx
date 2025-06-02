import React from "react";
import "./About.css";
import aboutImg from "../../assests/WhatsApp Image 2025-05-31 at 13.07.04_e03048ff.jpg"; // Use your actual image path

function About() {
  return (
    <section className="about-section" id="about">
      <p className="about-intro">Get To Know More</p>
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-details">
          <div className="about-cards">
            <div className="about-card">
              <span className="about-icon" role="img" aria-label="Experience">🏅</span>
              <h3>Experience</h3>
              <p>2+ years<br/>FullStack Development<br/>Ai&Ml enthusiast</p>
            </div>
            <div className="about-card">
              <span className="about-icon" role="img" aria-label="Education">👥</span>
              <h3>Education</h3>
              <p>B.Tech. Computer Science<br />KIIT,Bhubneswar</p>
            </div>
          </div>
          <p className="about-description">
          A dedicated software developer proficient in Java, C++, and Python, with a strong foundation in Data Structures and Algorithms to design efficient, scalable solutions. Experienced in full-stack development, I build robust applications using modern frameworks and tools. Passionate about continuous learning and problem-solving, I apply best coding practices to deliver high-quality software. My analytical mindset and technical skills enable me to contribute effectively in fast-paced, technology-driven environments.
          </p>
        </div>
      </div>
      <div className="about-scroll">
        <span>&#8595;</span>
      </div>
    </section>
  );
}

export default About;
