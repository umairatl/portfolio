import React from "react";
import '../resume/resume.css'
import profile from '../../assets/profilepic.png'
import pdf from '../../assets/Resume(Umairatul).pdf'

const Resume = () => {
    return ( 
        <section className="resume" id="resume">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx1 wow zoomIn">
                        <div className="container-2">
                            <div className="img-col">
                        <img src={profile} width='500px'/>
                            </div>
                            <div className="detail-col">
                        <a href ='https://www.linkedin/com/in/umairatul-asyiqin-1b43231a8' />

                        <h1> BACKGROUND </h1>
                        <p><b>Name : </b>Umairatul Asyiqin Begum</p>
                        <p><b>Major : </b>BSc(Hons) e-Business Technology & Management @ Liverpool John Moores University, UK 3+0</p>
                        <p><b>Award Accredited : </b>Bachelor in Science with Honors Class I (73%)</p>
                        <p><b>Language Spoken : </b>English / Malay</p>
                        <p><b>Address : </b>Kuala Lumpur, Malaysia</p>
                        <p><b>Email : </b>umairatlwork@gmail.com</p><br />
                        <a href={pdf} download><button>Resume</button></a>
                        <button className="git-btn"
        onClick={() => window.open('https://github.com/umairatl')}>
                        Github</button>
                        <button className="git-btn"
        onClick={() => window.open('https://www.linkedin.com/in/umairatul-asyiqin-1b43271a8/')}>
                        LinkedIn</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
     );
}
 
export default Resume;