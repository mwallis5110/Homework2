import React from "react";
import { Row, Col } from "react-bootstrap";
import Headshot from "../../images/Headshot2.png";
import "./about.css";

export default function About() {
    return (
      <div className="Container">
        <h1 className="aboutMe">&lt;Hey There, I'm Mason&gt;</h1>
        <Row>
        <Col sm={12} lg={6}>
        <img src={Headshot} class="headshot" alt="A pic of me" rounded/> 
        </Col>
        <Col sm={12} lg={6}>
        <p className = 'aboutText'>I'm an aspiring web developer with a background in marketing and sales. 
        My goal is to help you perfect your vision and website idea, then craft it to your specifications.
        <br />
        <br />
        I'm currently taking on entry-level projects to build up my resumé. I'm fluent in HTML5, CSS3, Javascript, Bootstrap, JQuery, NodeJS, SQL, MySQL and Python.</p>
        </Col>
        </Row>
      </div>
    );
}