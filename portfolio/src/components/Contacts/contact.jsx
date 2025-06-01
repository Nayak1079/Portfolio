import React from "react";
import "./contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact-subtitle">Get in Touch</p>
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-card">
        <a
          className="contact-item"
          href="mailto:sujalnayak41@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">Example@gmail.com</span>
        </a>
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/sujal-nayak-33405a249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          <span className="contact-text">LinkedIn</span>
        </a>
      </div>

      <nav className="contact-nav">
        <span onClick={() => scrollToSection("about")}>About</span>
        <span onClick={() => scrollToSection("experience")}>Experience</span>
        <span onClick={() => scrollToSection("projects")}>Projects</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </nav>

      {/* Footer */}
      <footer className="contact-footer">
        <p className="footer-text">Copyright © 2025 Nayak All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
