import { Component } from "react";
import CV from "../../assets/cv.pdf";
class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="contact-button" href={CV} download>
          Download CV
        </a>
      </div>
    );
  }
}

export default CTA;
