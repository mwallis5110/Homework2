import React from "react";
import "./Footer.css"
import { Row, Col } from "react-bootstrap";


export default function Footer() {
  return (
    <container>
      <footer className="contact">
        <h2 className="contactMe">Contact Me</h2>
        <Row>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a href="https://www.linkedin.com/in/masonwallis/">LinkedIn</a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a href="https://github.com/mwallis5110">Github</a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a href="assets/images/Mason_Wallis_Resume.pdf" download>
                My Resumé
              </a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a href="mailto: mwallis5110@gmail.com">Email Me</a>
            </h4>
          </Col>
        </Row>
      </footer>
    </container>
  );
}