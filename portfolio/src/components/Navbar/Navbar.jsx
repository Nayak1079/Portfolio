import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Sujal Nayak</div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="about-section"
            smooth={true}
            duration={100}
            onClick={() => setMenuOpen(false)}  // close menu on click
            spy={true}                         // active class on scroll
            offset={-70}                      // adjust scroll offset if you have fixed navbar
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            spy={true}
            offset={-70}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            spy={true}
            offset={-70}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            spy={true}
            offset={-70}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
