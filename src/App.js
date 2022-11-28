import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderTest from './components/main/main'
import Navbar from './components/navbar/navbar';
import Project from './components/project/project';
import Resume from './components/resume/resume';
import FOoter from './components/footer/footer';
import SkillsMobile from './components/mob-view-skills/skills-mob-view';

function App() {;

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
