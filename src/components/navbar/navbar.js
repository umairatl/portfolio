import React from "react";
import '../navbar/navbar.css';
import pdf from '../../assets/Resume(Umairatul).pdf'

const Navbar = () => {
    return ( 
        <div className='first-col'>
        <nav className="nav-up">
          <h1 className="font-burtons text-xl">developedbyuab</h1>
          <ul className="nav-right">
              <a className="nav-text" href="#resume">  About Me </a>
              <a className="nav-text" href="#project">  Projects </a>
              <a className="nav-text" href={pdf} download>  Resume </a>
          </ul>
        </nav>
      </div>
     );
}
 
export default Navbar;