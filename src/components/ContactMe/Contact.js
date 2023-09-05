

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; import "./Contact.scss";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div className="ContactMe" id="contact">
      <h1 className="about-header" style={{ textAlign: "center" }}>
        Contact Me
      </h1>
      <hr
        className="divider"
        style={{
          margin: "auto",
          padding: '2%'
        }}
      />
      <Container>
        <Col >
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                  <img
                    src="images/mail.svg"
                    alt="email-icon"
                    height="50"
                    width="50"
                  />
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Email</Row>
                  <Row className="contact-value">bhartianubha9@gmail.com</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                  <img
                    src="images/phone.svg"
                    alt="email-icon"
                    height="50"
                    width="50"
                  />
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Phone</Row>
                  <Row className="contact-value">9380756358,7319329240</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                  <img
                    src="images/home.png"
                    alt="home-icon"
                    height="50"
                    width="50"
                  />
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Address</Row>
                  <Row className="contact-value">Anisabad Patna</Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="form-group">
            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              className="">
              <div class="row">
                <div class="form-group name1 col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control form-control-md"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group name1 col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-md"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"

                  />
                </div>
              </div>
              <br />
              <textarea
                id="message"
                name="message"
                className="form-control form-control-md"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your value"

              />
              <br />
              <button
                type="submit"
                className="contact-button">
                Send message now
              </button>
            </form>
          </div>
        </Col>
      </Container>
      <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%' }}>
        <div id="google-maps-canvas" style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', display: "flex", justifyContent: "center" }}>
          <iframe style={{
            width: "80%", height: "100%", padding: '5%',
            alignItems: 'center', alignContent: "center"
          }}
            src="https://www.google.com/maps/embed/v1/place?q=Saket+Vihar,
          +Anisabad,+Patna,+Bihar,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </div>
      </div>
    </div>
  );
}