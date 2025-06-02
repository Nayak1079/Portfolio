import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/project"; 
import Contact from "./components/Contacts/contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Experience/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
