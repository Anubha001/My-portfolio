import React, { Component } from "react";
import Intro from "./Intro";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="container">
          <div className="header">
            <span class="subheading">Hey! I am </span>
            <h1 className="myName">Anubha Bharti</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h4 className="introduction">
              Senior Frontend developer with
              4+ years of experience in web
              developer, coding websites and
              applications. Well-versed in
              JavaScript, React.js, HTML, CSS;
              plus modern libraries and
              framework. Equipped with a
              record of success in consistently
              identifying and providing the
              technological needs of product
              through ingenious innovation.
            </h4>
            {/* <button className="contact-me"> Contact Me</button> */}
          </div>
          <div className="container">
            <div className="hero-shape custom-animation">
              <img
                src="images/dot.svg"
                alt="circle-animation"
                height="50"
                width="50"
                style={{ opacity: "0.5" }}
              />
            </div>
            <div className="image image-fluid">
              <img
                src="images/witch.svg"
                alt="Anubha"
                height="300"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
