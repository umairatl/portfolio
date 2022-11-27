import "../navbar/navbar.css";
import pdf from "../../assets/Resume(Umairatul).pdf";
import React, { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const title = <p>Portfolio Content</p>;

  return (
    <div>
      <div className="first-col">
        <nav className="nav-up">
          <div className="vis">
            <h1 className="font-burtons text-xl">developedbyuab</h1>
          </div>
          <ul className="nav-right">
            <a className="nav-text" href="#resume">
              About Me
            </a>
            <a className="nav-text" href="#project">
              Projects
            </a>
            <a className="nav-text" href={pdf} download>
              Resume
            </a>
          </ul>
        </nav>
      </div>

      <div className="nav-mobile">
        <div className="top">
          <div className="left-side">
            <span onClick={() => setShowNav(true)}>&#9776;</span>
          </div>
          <div className="right-side">developedbyuab</div>
        </div>
        <div className="nav-section" onClick={() => setShowNav(false)}>
          <SideNav
            className="side-cont"
            showNav={showNav}
            title={title}
            items={[
              <a href="#resume"> About Me </a>,
              <a href="#project"> Projects </a>,
              <a href={pdf} download>
                Resume
              </a>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
