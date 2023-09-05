import React from "react";
// import { ProjectDetails } from "./ProjectDetails";
import { Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Project.scss";
function Maz() {
  return (
    <div>
      <Col>
        <Row>
          <div className="project-card-details">
            <ProjectCard
              image="images/fitility.jpg"
              title="Fitility"
              body="An android application for dance, fitness workout videos and diet plans along with user authentication, admin role management, CRUD functionalities with Firebase."
            demourl="https://google.com"
            codeurl="https://github.com/samflab/Fitility-OpenSource"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image="images/notesflix.jpg"
              title="Notesflix"
              body="An online radio show that aims to bring people from different professional backgrounds on a single platform to share their career roadmap and few other features."
              demourl="https://notesflix.in"
              codeurl="https://github.com/samflab/Notesflix"
            />
          </div>
        </Row>
      </Col>
    </div>
  );
}
function urlClick(link){
  const url = link;
  window.open(url, '_blank');
}

function ProjectCard(props) {
  return (
    <div>
      <Row>
        <Card style={{ width: "25rem" }} className="project-card">
          <Card.Img
            variant="top"
            src={props.image}
            height="300"
            width="300"
            className="project-icons"
          />
          <Card.Body>
            <Card.Title className="project-title">{props.title}</Card.Title>
            <Card.Text className="project-body">{props.body}</Card.Text>
            <p style={{textAlign: "center", left: "0", marginTop: "10px"}}>
              <Button className="urls" onClick={()=>{urlClick(props.demourl)}}> Demo </Button> <Button className="urls"onClick={()=>{urlClick(props.codeurl)}}> Code </Button>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default Maz;
