import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function TopNavbar(props) {
  return (
    <Navbar className="light">
      <Container>
        <Nav className="me-auto" class="redButton">
          <Nav.Link id="link1" onClick={() => props.setCurrentPage(1)}>About Me</Nav.Link>
          <Nav.Link id="link2" onClick={() => props.setCurrentPage(2)}>
            My Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}