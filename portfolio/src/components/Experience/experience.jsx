import React from "react";
import "./experience.css";
import checkmark from "../../assests/checkmark.png"; // Use your actual checkmark icon path
function Experience() {
  return (
    <section className="experience-section" id="experience">
      <p className="experience-intro">Explore My</p>
      <h2 className="experience-title">Experience</h2>
      <div className="experience-cards">
        {/* Frontend Development */}
        <div className="experience-card">
          <h3>Frontend Development</h3>
          <div className="experience-list">
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

               <div className="experience-box">
                <strong>HTML</strong>
                <p>Experienced</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>CSS</strong>
                <p>Experienced</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>tailwind</strong>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

               <div className="experience-box">
                <strong>JavaScript</strong>
                <p>Basic</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

             <div className="experience-box">
                <strong>TypeScript</strong>
                <p>Basic</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

               <div className="experience-box">
                <strong>Material UI</strong>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        {/* Backend Development */}
        <div className="experience-card">
          <h3>Backend Development</h3>
          <div className="experience-list">
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

               <div className="experience-box">
                <strong>PostgreSQL</strong>
                <p>Basic</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>Node JS</strong>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>Express JS</strong>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>Git</strong>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>FLASK</strong>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="experience-item">
              <span className="experience-icon">
  <img src={checkmark} alt="checkmark" />
</span>

              <div className="experience-box">
                <strong>GCP </strong>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-scroll">
        <span>&#8595;</span>
      </div>
    </section>
  );
}

export default Experience;
