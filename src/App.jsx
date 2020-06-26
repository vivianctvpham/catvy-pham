import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
          <NavBar />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </body>
      </div>
    );
  }
}

export default App;
