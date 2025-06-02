import React, { useState, useEffect } from "react";
import "./Home.css";
import profileImg from "../../assests/about.jpg";

function Home() {
  const roles = [
    "Fullstack Developer",
    "AI & ML Enthusiast",
    "Tech Explorer",
    "Problem Solver"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 300;

    const timeout = setTimeout(() => {
      setDisplayedText(prev =>
        isDeleting ? currentRole.slice(0, prev.length - 1) : currentRole.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleImageClick = () => {
    const skillsSection = document.getElementById("experience");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home-section" id="about">
      <div className="home-content">
        <div className="home-left">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="home-right">
          <p className="home-greeting">Hello, I'm</p>
          <h1 className="home-name">Sujal Nayak</h1>
          <h2 className="home-role">
            <span className="typewriter">{displayedText}</span>
          </h2>

          <div className="home-buttons">
            <a href="/MTeck_s_Resume (11).pdf" className="btn-outline" download="NayakCV.pdf">Download CV</a>
            <a href="#contact" className="btn-dark">Contact Info</a>
          </div>
          <div className="home-socials">
            <a href="https://www.linkedin.com/in/sujal-nayak-33405a249/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="icon" />
            </a>
            <a href="https://github.com/Nayak1079" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
