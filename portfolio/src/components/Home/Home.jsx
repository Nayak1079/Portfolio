import React from "react";
import "./Home.css";
import profileImg from "../../assests/about.jpg"; // Place your image here

function Home() {
  // Scroll to Skills section when image is clicked
  const handleImageClick = () => {
    const skillsSection = document.getElementById("skills");
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
  <span className="bouncy-period">Fullstack Developer</span>
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
