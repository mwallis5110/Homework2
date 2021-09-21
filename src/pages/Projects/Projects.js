import React from "react";
import Chef from "../../images/sous-chef.PNG";
import Fitness from "../../images/fitness_tracker.PNG";
import Employee from "../../images/employee_tracker.gif";
import Note from "../../images/note_taker.gif";
import Pet from "../../images/pet-seeker.PNG";
import Construction from "../../images/under_construction.png";
import { Card, CardImg, Row, Col } from "react-bootstrap";
import "./projects.css";


export default function Projects() {
  return (
    <div className="container">
      <h1 className='myWork'>My Work</h1>
      <p className = 'topText'>
        These are just a few of the many projects I've had the pleasure of
        working on:
      </p>
      <Row>
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Chef}
              alt="Portfolio Generator Screenshot"
            />
            <Card.Body>
              <Card.Title>Sous Chef</Card.Title>
              <Card.Text>
                A web application that allows a user to browse a recipe library
                and save recipes to their own user homepage/dashboard.
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/Sous-Chef">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Construction}
              alt="Portfolio Generator"
            />
            <Card.Body>
              <Card.Title>Portfolio Generator</Card.Title>
              <Card.Text>
                React and GraphQL application that generates a portfolio based
                on user inputs.
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/React_Portfolio_Generator">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Fitness}
              alt="Fitness Tracker Screenshot"
            />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
                This is a program used to input and track your workout stats.
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/Fitness_Tracker_HW_15">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Employee}
              alt="Employee Tracker gif"
            />
            <Card.Body>
              <Card.Title>Employee Tracker</Card.Title>
              <Card.Text>
                Using Node.js, MYSQL, and Inquirer, this program manages a
                company's employee database via a command-line interface.
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/Employee_Tracker_HW12">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Note} alt="Note Taker gif" />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                A simple note taking app built using Express.js
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/Note_Taker_HW11">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Pet} alt="Pet Seeker Screenshot" />
            <Card.Body>
              <Card.Title>Pet Seeker</Card.Title>
              <Card.Text>
                Pet Seeker is a user-friendly website that can help you find
                your new four-legged friend!
              </Card.Text>
              <Card.Link href="https://github.com/mwallis5110/pet-seeker">
                Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div> //Bottom container div
  );
}
