import React from "react";
// import hive from "../../myFiles/hiveLogo.jpg";
import scrubs from "../../myFiles/scrubs2.jpg";
import reactcalc from "../../myFiles/react-calculator.png";
import notwelcome from "../../myFiles/NOT WELCOME.png";
import "./project.css";
import ScrollAnimation from "react-animate-on-scroll";
import LinkIcon from "@material-ui/icons/Link";
// import FadeInLeftSection from "./FadeInLeftSection";
// import FadeInRightSection from "./FadeInRightSection";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div id="portfolio" className="text-center">
          <div className="container">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
            <ScrollAnimation animateIn="fadeInUp">
              <div className="row">
                <div className="col-md-3">
                  <div className="pContainer">
                    <img src={notwelcome} alt="Not Welcome" duration={3} />
                    <div className="pOverlay">
                      <div className="description">
                        Worked with a team to develop and deploy an exclusive
                        social network platform that focuses on automobiles,
                        utilizing React Hooks and Firebase SDK in order to
                        operate with Firestore NoSQL database.
                      </div>
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
                <div className="col-md-3">
                  <div className="pContainer">
                    <img src={scrubs} alt="Scrubs Data" duration={3} />
                    <div className="pOverlay">
                      <div className="description">
                        Scrubs Data was founded to improve provider directories
                        by making it easier for doctors to update their
                        information, health insurance companies to save money
                        while improving accuracy, and enabling patients to more
                        confidently select a health care practitioner. Built and
                        implemented a highly scalable application for the
                        company as a short term contract.
                      </div>
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
                <div className="col-md-3">
                  <div className="pContainer">
                    <img src={reactcalc} alt="React Calculator" duration={3} />
                    <div className="pOverlay">
                      <div className="description">
                        Side project. Built and implemented a simple
                        Apple-inspired Calculator from scratch.
                      </div>
                      <div id="tech" className="techUsed">
                        <ul className="techList">
                          <li className="techCheck">
                            <i className="fa fa-check" />
                            React.js
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://github.com/vivianctvpham/react-calc"
                        title="React Calculator"
                      >
                        <LinkIcon />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="portfolio-items">
                <div className="col-md-4 col-md-4 col-lg-4">
                  <FadeInRightSection className="portfolio-item">
                    <img
                      src={notwelcome}
                      className="img-responsive"
                      alt="Not Welcome"
                    />
                  </FadeInRightSection>
                </div>
                <FadeInLeftSection>
                  <div className="col-md-7">
                    <h4>
                      NotWelcome LLC
                      <a href="https://notwelcome.com/" title="NotWelcome LLC">
                        <i className="fa fa-external-link-square rightLink"></i>
                      </a>
                    </h4>
                    <div className="description">
                      Worked with a team to develop and deploy an exclusive
                      social network platform that focuses on automobiles,
                      utilizing React Hooks and Firebase SDK in order to operate
                      with Firestore NoSQL database.
                    </div>
                    <div id="tech" className="techUsed">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          React.js
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Firebase/Firestore NoSQL database
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeInLeftSection>
              </div> */}
              </div>
            </ScrollAnimation>
            {/* <div className="row">
              <div className="portfolio-items">
                <div className="col-md-4 col-md-4 col-lg-4">
                  <FadeInLeftSection className="portfolio-item">
                    <img
                      src={scrubs}
                      className="img-responsive"
                      alt="Scrubs Data"
                    />
                  </FadeInLeftSection>
                </div>
                <FadeInRightSection>
                  <div className="col-md-7">
                    <h4>
                      Scrubs Data
                      <a
                        href="https://scrubsdata.azurewebsites.net/"
                        title="Scrubs Data"
                      >
                        <i className="fa fa-external-link-square rightLink"></i>
                      </a>
                    </h4>
                    <div className="description">
                      Scrubs Data was founded to improve provider directories by
                      making it easier for doctors to update their information,
                      health insurance companies to save money while improving
                      accuracy, and enabling patients to more confidently select
                      a health care practitioner. Built and implemented a highly
                      scalable application for the company as a short term
                      contract.
                    </div>
                    <div id="tech" className="techUsed">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          React.js
                        </li>

                        <li>
                          <i className="fa fa-check" />
                          C#/.NET
                        </li>

                        <li>
                          <i className="fa fa-check" />
                          SQL/SQL Server
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeInRightSection>
              </div>
            </div>
            <div className="row">
              <div className="portfolio-items">
                <div className="col-md-4 col-md-4 col-lg-4 calculatorImg">
                  <FadeInRightSection className="portfolio-item">
                    <img
                      src={reactcalc}
                      className="img-responsive"
                      alt="React Calculator"
                    />
                  </FadeInRightSection>
                </div>
                <FadeInLeftSection>
                  <div className="col-md-7 calculatorDesContainer ">
                    <h4>
                      <a
                        href="https://github.com/vivianctvpham/react-calc"
                        title="Project Title"
                      >
                        <i className="fa fa-github leftLink"></i>
                      </a>
                      React Calculator
                    </h4>
                    <div className="calcContent">
                      Side project. Built and implemented a simple
                      Apple-inspired Calculator from scratch.
                    </div>
                    <div id="tech" className="react-calc">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          React.js
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeInLeftSection>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
