import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export default function TopNavBar(props) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.setCurrentPage(1)}>About Me</Nav.Link>
          <Nav.Link onClick={() => props.setCurrentPage(2)}>
            My Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}