import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span> <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand page-scroll" href="#page-top">
                VCP.
              </a>
            </div>

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#about" class="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" class="page-scroll">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#portfolio" class="page-scroll">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" class="page-scroll">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
