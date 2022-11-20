import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderTest from './components/main/main'
import Skills from './components/skills/skills'
import Navbar from './components/navbar/navbar';
import Project from './components/project/project';
import Resume from './components/resume/resume';
import FOoter from './components/footer/footer';


function App() {
  return (
    <div>
      <Navbar />
      < HeaderTest />
      <Skills />
      {/* <AboutMe /> */}
      <Project />
      <Resume />
      <FOoter />
    </div>
  );
}

export default App;
