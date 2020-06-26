import React from "react";
import resume from "../../myFiles/Resume.pdf";
import "./downloadButton.css";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div id="experience" className="text-center">
          <div className="container">
            <div className="section-title">
              <h2>Experience</h2>
              <p>
                My experiences have been very untraditional for pursuing Tech.
                {/* Over the years, I have developed a range of both soft and hard
                skills through my work life, all in which I use every day in my
                professional life, despite the job. */}{" "}
                However, I am confident that I can seamlessly adapt in any given
                environment and be able to leverage my skills optimally. I have
                always had a deep desire to learn and be impactful in everything
                I do and I live for the challenges that programming provides...I
                can not be more excited to contribute to meaningful projects in
                the future!
              </p>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Resume.pdf"
                className="downloadButton"
              >
                {/* <i className="fa fa-cloud-download button"></i> */}
                Download Resume
              </a>
            </div>
            <div className="row">
              <div className="col-md-4">
                <i className="fa fa-code"></i>
                <div className="service-desc">
                  <h3>Developer</h3>
                  <p>
                    Collaborated with a team of 12+ developers on a short term
                    medical project. Honed in on problem-solving and
                    communication skills among a large team. Implemented key
                    features on application built with React.js, C#/.NET, and
                    SQL/SQL Server.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-laptop"></i>
                <div className="service-desc">
                  <h3>Financial Aid Analyst</h3>
                  <p>
                    Worked at WCU Administration office solving high-volume
                    traffic of Financial Aid refunds for students efficiently.
                    Sharpened analysis and attention to detail skills with each
                    student's profile. Highly skilled in Microsoft Office as
                    well.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-lightbulb-o"></i>
                <div className="service-desc">
                  <h3>Avid Learner</h3>
                  <p>
                    I'm always curious. Always learning and digging for new and
                    random facts. Whether it be in daily life or in code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
