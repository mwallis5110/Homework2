import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "./Footer.css";

export default function Footer() {
  return (
    <container>
      <footer>
        <h2 className="contactMe">Contact Me</h2>
        <Row className="contactLinks">
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a id="linkedin" href="https://www.linkedin.com/in/masonwallis/">
                LinkedIn
              </a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a id="github" href="https://github.com/mwallis5110">
                Github
              </a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <h4>
              <a id="resume" href="../../images/Mason_Wallis_Resume.pdf" download>
                My Resumé
              </a>
            </h4>
          </Col>
          <Col sm={12} lg={6} xl={3}>
            <OverlayTrigger overlay={<Tooltip>mwallis5110@gmail.com</Tooltip>}>
              <h4>
                <a id="emailAddress" href="mailto: mwallis5110@gmail.com">
                  Email Me
                </a>
              </h4>
            </OverlayTrigger>
          </Col>
        </Row>
      </footer>
    </container>
  );
}
