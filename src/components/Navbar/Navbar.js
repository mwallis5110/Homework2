import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export default function TopNavbar(props) {
  return (
    <Navbar>
      <Container>
        <Nav>
          <Nav.Link id="link1" onClick={() => props.setCurrentPage(1)}>
            About Me
          </Nav.Link>
          <Nav.Link id="link2" onClick={() => props.setCurrentPage(2)}>
            My Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
