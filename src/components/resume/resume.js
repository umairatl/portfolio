import React from "react";
import '../resume/resume.css'
import profile from '../../assets/profilepic.png'
import pdf from '../../assets/Resume(Umairatul).pdf'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Resume = () => {
    return ( 
        <section  id="resume">
        <div className="wrap-out-resume">
        <div className="resume">
            <h1>Background</h1>
       
        <div className="container">
            <div className='cont-wrap-bck'>
                        <img src={profile} width='500px'/>

                        <div className="wrap-details">
                                {/* <h1> Background </h1> */}

                        <p><b>Name : </b>Umairatul Asyiqin Begum</p>
                        <p><b>Major : </b>BSc(Hons) e-Business Technology & Management @ Liverpool John Moores University, UK 3+0</p>
                        <p><b>Award Accredited : </b>Bachelor in Science with Honors Class I (73%)</p>
                        <p><b>Language Spoken : </b>English / Malay</p>
                        <p><b>Address : </b>Kuala Lumpur, Malaysia</p>
                        <p><b>Email : </b>umairatlwork@gmail.com</p><br />
                       
            </div>
           
    {/* </div> */}
                    </div>
                    <div className="socials-btn-wrap">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <a href={pdf} download> <Button className="btn-social-resume">Resume</Button></a>
      <Button className="btn-social" onClick={() => window.open('https://github.com/umairatl')}>
      <i class="fa fa-github"></i></Button>
      <Button className="btn-social" onClick={() => window.open('https://www.linkedin.com/in/umairatul-asyiqin-1b43271a8/')}><i class="fa fa-linkedin"></i></Button>
    </ButtonGroup>
    </div>
    </div>

    </div>

































    <div className="mobile-view-resume">
    <section>
        
        <img src={profile} ></img>
       <h1>Background</h1>
       <div className="cont-resume-mobile">
               <p><b>Name : </b>Umairatul Asyiqin Begum</p>
                        <p><b>Major : </b>BSc(Hons) e-Business Technology & Management @ Liverpool John Moores University, UK 3+0</p>
                        <p><b>Award Accredited : </b>Bachelor in Science with Honors Class I (73%)</p>
                        <p><b>Language Spoken : </b>English / Malay</p>
                        <p><b>Address : </b>Kuala Lumpur, Malaysia</p>
                        <p><b>Email : </b>umairatlwork@gmail.com</p>
                       <p><b>Platform:</b></p> 
    {/* <ButtonGroup className="wrap-out-btn" variant="contained" aria-label="outlined primary button group"> */}
     <a href={pdf} download> <button className="btn-social-resume">Resume</button></a>
      <button className="btn-social" onClick={() => window.open('https://github.com/umairatl')}>
      <i class="fa fa-github"></i></button>
      <button className="btn-social" onClick={() => window.open('https://www.linkedin.com/in/umairatul-asyiqin-1b43271a8/')}>
        <i class="fa fa-linkedin"></i></button>
   
    {/* </ButtonGroup> */}
    </div>

    </section>
    </div>
    </div>
    </section>
     );
}
 
export default Resume;