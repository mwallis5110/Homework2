import React from "react";
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function TopNavbar(props) {
  return (
    <Navbar className="light">
      <Container>
        <Nav className="me-auto" class="redButton">
          {/* <Row> */}
            {/* <Col sm={12}> */}
              <Nav.Link id="link1" onClick={() => props.setCurrentPage(1)}>
                About Me
              </Nav.Link>
            {/* </Col> */}
            {/* <Col sm={12}> */}
              <Nav.Link id="link2" onClick={() => props.setCurrentPage(2)}>
                My Projects
              </Nav.Link>
            {/* </Col> */}
          {/* </Row> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
