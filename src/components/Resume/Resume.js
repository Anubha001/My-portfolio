import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./Education/Education";
import Internship from "./Internship/Internship";
import Skills from "./Skills/Skills";
import Achievements from "./Achievement/Achievements";
import "./Resume.scss";
import CTA from "./CTA";

class Resume extends Component {
  render() {
    return (
      <div className="Resume" id="resume">
        <h1 className="about-header" style={{ textAlign: "center" }}>
          Resume
        </h1>
        <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
        <CTA />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Resume;
