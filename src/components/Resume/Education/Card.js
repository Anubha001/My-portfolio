import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { EducationDetails } from "./Details";
import "../Resume.scss";

class Cards extends React.Component {
  render() {
    return (
      <div>
        {EducationDetails.map((item, index) => {
          return (
            <Col className="resume-container">
              <Row>
                <h6 className="achievement-year">{item.year}</h6>
              </Row>
              <Row>
                <h4 className="achievement-course">{item.course}</h4>
              </Row>
              <Row>
                <span className="achievement-college">{item.college}</span>
              </Row>
              <Row>
                <span className="achievement-desc">{item.desc}</span>
              </Row>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Cards;
