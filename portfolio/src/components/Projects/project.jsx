import React from "react";
import "./project.css";
import project1 from "../../assests/YouTube-comment-YouTube.webp"; // Replace with your image paths
import project2 from "../../assests/chat.png";
import project3 from "../../assests/complexity.png";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <p className="projects-intro">Browse My Recent</p>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-cards">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            <img src={project1} alt="Project One" />
          </div>
          <h3 className="project-name">Project One</h3>
          <div className="project-buttons">
            <a href="https://github.com/AnshCinematic/YoutubeAnalyzer.git" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Github</a>
            <a href="https://youtubeanalyser-rust.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Live Demo</a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            <img src={project2} alt="Project Two" />
          </div>
          <h3 className="project-name">Project Two</h3>
          <div className="project-buttons">
            <a href="https://github.com/Nayak1079/messenger-app" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Github</a>
            <a href="https://messenger-app-one-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Live Demo</a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project-card">
  <div className="project-image">
    <img src={project3} alt="Project Three" />
  </div>
  <h3 className="project-name">Project Three</h3>
  <div className="project-buttons">
    <a href="https://github.com/Nayak1079/Complexity-Analyser" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Github</a>
    <a href="https://complexity-analyser-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn-outline">Live Demo</a>
  </div>
</div>

      </div>
      <div className="projects-scroll">
        <span>&#8595;</span>
      </div>
    </section>
  );
}

export default Projects;
