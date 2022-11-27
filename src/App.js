import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderTest from './components/main/main'
import Navbar from './components/navbar/navbar';
import Project from './components/project/project';
import Resume from './components/resume/resume';
import FOoter from './components/footer/footer';
import SkillsMobile from './components/mob-view-skills/skills-mob-view';
import AOS from "aos";
import "aos/dist/aos.css";
// import { useState, useEffect } from "react";

function App() {

// useEffect(() => {
//   AOS.init();

//   document.getElementById("app").addEventListener("scroll", () => {
//   AOS.refresh();
//   });
// }, []);

  return (
    <div id='app'>
      <Navbar />
      < HeaderTest />
      <SkillsMobile />
      {/* <AboutMe /> */}
      <Project />
      <Resume />
      <FOoter />
    </div>
  );
}

export default App;
