import React from "react";
import scrubs from "../../myFiles/scrubs2.jpg";
import notwelcome from "../../myFiles/NOT WELCOME.png";
import winkbywynter from "../../myFiles/winkbywynter.JPG";
import "./project.css";
import LinkIcon from "@material-ui/icons/Link";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000 });

class Projects extends React.Component {
  render() {
    return (
      <>
        <div id="portfolio" className="text-center">
          <div className="container">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
            <div className="row" data-aos="fade-up">
              {/* <ScrollAnimation animateIn={FadeInUp} duration={3} delay={2}> */}
              <div className="col-md-4">
                <div className="service-container">
                  <img src={winkbywynter} alt="Wink by Wynter" />
                  <div className="service-overlay">
                    <div className="description">
                      <div class="header">
                        <h5 class="card-title">Wink by Wynter</h5>
                      </div>
                      <div className="card-body">
                        <p className="service-text">
                          <span>* IN PROGRESS * </span> <br />
                          Designed and implemented a beauty services platform
                          for a small owned business.
                        </p>
                        <div id="tech" className="techUsed">
                          <ul className="techList">
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              React.js
                            </li>
                          </ul>
                        </div>
                        <a
                          href="https://winkbywynter.com/"
                          title="Wink by Wynter"
                        >
                          <LinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-container">
                  <img src={notwelcome} alt="Not Welcome" />
                  <div className="service-overlay">
                    <div className="description">
                      <div className="header">
                        <h5 class="card-title">Not Welcome</h5>
                      </div>
                      <div className="card-body">
                        <p className="service-text">
                          Worked with a team to develop and deploy an exclusive
                          social network platform that focuses on automobiles,
                          utilizing React Hooks and Firebase SDK in order to
                          operate with Firestore NoSQL database.
                        </p>
                        <div id="tech" className="techUsed">
                          <ul className="techList">
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              React.js
                            </li>
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              Firebase/Firestore NoSQL database
                            </li>
                          </ul>
                        </div>
                        <a href="https://notwelcome.com/" title="Not Welcome">
                          <LinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-container">
                  <img src={scrubs} alt="Scrubs Data" />
                  <div className="service-overlay">
                    <div className="description">
                      <div className="header">
                        <h5 class="card-title">Scrubs Data</h5>
                      </div>
                      <div className="card-body">
                        <p className="service-text">
                          Scrubs Data was founded to improve provider
                          directories by making it easier for doctors to update
                          their information, health insurance companies to save
                          money while improving accuracy, and enabling patients
                          to more confidently select a health care practitioner.
                          Built and implemented a highly scalable application
                          for the company as a short term contract.
                        </p>
                        <div id="tech" className="techUsed">
                          <ul className="techList">
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              React.js
                            </li>
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              C#/.NET
                            </li>
                            <li className="techCheck">
                              <i className="fa fa-check" />
                              SQL/SQL Server
                            </li>
                          </ul>
                        </div>
                        <a href="https://notwelcome.com/" title="Not Welcome">
                          <LinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </ScrollAnimation> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
