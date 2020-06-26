import React from "react";
import myPhoto from "../myFiles/IMG_4949.jpg";
// import bella from "../myFiles/bella.jpg";
// import maui from "../myFiles/maui1.jpg";
// import mopsy from "../myFiles/mopsy.jpg";

class About extends React.Component {
  render() {
    return (
      <>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={myPhoto} className="img-responsive" alt="" />
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>Hi there!</h2>
                  <p>
                    I'm Vivian Pham and I'm a full-stack developer currently
                    located in SoCal. I enjoy breaking down complex problems and
                    finding creative solutions for it! My path within the tech
                    industry is just starting out and I could not be more
                    excited. My passion for code and tech boils down to a simple
                    sentence: I want to <i>make things</i> that
                    <i>make a difference.</i>
                  </p>
                  <p>
                    Outside of work, I am a dog mom of three. I enjoy coffee,
                    walking, traveling, or researching new and random topics
                    because I genuinely believe that there is always something
                    new to learn ( ᐛ )و
                  </p>

                  {/* <h3>Here are some of the technologies I've used:</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>C#</li>
                        <li>.NET/.NET Core/ADO</li>
                        <li>SQL/SQL Server</li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
