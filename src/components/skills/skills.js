import '../skills/skills.css'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SkillsMobile from '../mob-view-skills/skills-mob-view';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <div className='wrap-out-skills'>
        {/* <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                           <div className='car-col'>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                      <div class="progressbar">
                                          <svg class="progressbar__svg">
                                              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                                          </svg>
                                          <span class="progressbar__text shadow-html">HTML, CSS, JS</span>
                                    </div>
                                </div>
                              </div>
                              <p>Able to create responsive web app</p>
                                </div>



                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                  <div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
			</svg>
			<span class="progressbar__text shadow-react">REACT JS</span>
		</div>
                                </div>
                              </div>
                              <p>Able to use basic components like route, state management</p>
                                </div>



                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                      <div class="progressbar">
                                          <svg class="progressbar__svg">
                                              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-angular shadow-angular"> </circle>
                                          </svg>
                                          <span class="progressbar__text shadow-angular">ANGULAR MATERIAL</span>
                                    </div>
                                </div>
                              </div>
                              <p>UI component based</p>
                                </div> 
                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                      <div class="progressbar">
                                          <svg class="progressbar__svg">
                                              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-typescript shadow-typescript"> </circle>
                                          </svg>
                                          <span class="progressbar__text shadow-typescript">TYPESCRIPT</span>
                                    </div>
                                </div>
                              </div>
                                </div> 
                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                      <div class="progressbar">
                                          <svg class="progressbar__svg">
                                              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-pm shadow-pm"> </circle>
                                          </svg>
                                          <span class="progressbar__text shadow-pm">PROJECT MANAGEMENT</span>
                                    </div>
                                </div>
                              </div>
                              <p>Planning,organizing,implementation</p>
                                </div>
                                <div className="item">
                                <div class="container-2">
                                  <div class="container__progressbars">
                                      <div class="progressbar">
                                          <svg class="progressbar__svg">
                                              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ad shadow-ad"> </circle>
                                          </svg>
                                          <span class="progressbar__text shadow-ad">ANALYSIS & DESIGN</span>
                                    </div>
                                </div>
                              </div>
                              <p>Analyzing user requirements, system design, database design</p>
                                </div>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section> */}
            <SkillsMobile />
            </div>
      )
    }
export default Skills;