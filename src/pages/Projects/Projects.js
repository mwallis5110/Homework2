import React from "react";
import Chef from "../../images/sous-chef.PNG";
import Fitness from "../../images/fitness_tracker.PNG";
import Employee from "../../images/employee_tracker.gif";
import Note from "../../images/note_taker.gif";
import Pet from "../../images/pet-seeker.PNG";
import PortfolioGen from "../../images/portfolioGenerator.PNG";
import Construction from "../../images/under_construction.png";
import { CardImg, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import "./projects.css";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="myWork">My Work</h1>
      <p className="topText">
        These are just a few of the many projects I've had the pleasure of
        working on:
      </p>

      {/* Row 1 */}
      <Row>
        {/* Nphase Records Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Construction}
              alt="Nphase Records Portfolio"
            />
            <Card.Body>
              <Card.Title>Nphase Records Portfolio</Card.Title>
              <Card.Text>
                <br />
                My first paid project. A React-based portfolio website created
                for Nphase Records. Uses "whatever that video npm thing was" to
                work with videos. **Under construction
                <br />
              </Card.Text>
              <Button
                variant="outline-info"
                href="https://music-portfolio-20.herokuapp.com/"
              >
                Deployed Website
              </Button>{" "}
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/Music_Portfolio"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        {/* Portfolio Generator Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={PortfolioGen}
              alt="Portfolio Generator"
            />
            <Card.Body>
              <Card.Title>Portfolio Generator</Card.Title>
              <Card.Text>
                <br />
                An application that utilizes GraphQL, React, and MongoDB to
                generate a detailed and shareable portfolio based on user
                inputs.
                <br />
                <br />
              </Card.Text>
              <Button
                variant="outline-info"
                href="https://react-portfolio-generator-uta.herokuapp.com/"
              >
                Deployed Website
              </Button>{" "}
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/React_Portfolio_Generator"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        {/* Sous Chef Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Chef} alt="Sous Chef Screenshot" />
            <Card.Body>
              <Card.Title>Sous Chef</Card.Title>
              <Card.Text>
                A full-stack web application that allows a user to browse a
                recipe library and save recipes to their own user
                homepage/dashboard. Uses NodeJS, Express.js, Handlebars, MySQL,
                and Sequelize.
              </Card.Text>
              <Button
                variant="outline-info"
                href="https://sous-chef-project-2.herokuapp.com/"
              >
                Deployed Website
              </Button>{" "}
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/Sous-Chef"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      {/* </Row> */}

      {/* Row 2 */}
      {/* <Row> */}
        {/* Pet Seeker Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Pet} alt="Pet Seeker Screenshot" />
            <Card.Body>
              <Card.Title>Pet Seeker</Card.Title>
              <Card.Text>
                Pet Seeker is a user-friendly website that can help you find
                your new four-legged friend! Imports data from
                <a href="https://www.petfinder.com/"> PetFinder</a> and
                <a href="https://thedogapi.com/"> The Dog API</a>.
              </Card.Text>
              <Button
                variant="outline-info"
                href="https://brandonnorsworthy.github.io/pet-seeker/"
              >
                Deployed Website
              </Button>{" "}
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/pet-seeker"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        {/* Book Search Engine Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Construction}
              alt="Book Search Engine Screenshot"
            />
            <Card.Body>
              <Card.Title>Book Search Engine</Card.Title>
              <Card.Text>
                TODO: Finish this project, deployed site link, add description.
                **Don't forget to update resume and check ALL links too
              </Card.Text>
              <Button
                variant="outline-info"
                href="https://brandonnorsworthy.github.io/pet-seeker/"
              >
                Deployed Website
              </Button>{" "}
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/Book_Search_Engine"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Pet} alt="Pet Seeker Screenshot" />
            <Card.Body>
              <Card.Title>Redux Store</Card.Title>
              <Card.Text>
                TODO: Finish this project, update links, write description
              </Card.Text>
              <Button
                variant="outline-success"
                style={{ float: "right" }}
                href="https://github.com/mwallis5110/Book_Search_Engine"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      {/* </Row> */}

      {/* Row 3 */}
      {/* <Row> */}
        {/* Employee Database Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              width="100%"
              src={Employee}
              alt="Employee Database gif"
            />
            <Card.Body>
              <Card.Title>Employee Database</Card.Title>
              <Card.Text>
                Using Node.js, MYSQL, and Inquirer, this program manages a
                company's employee database via a command-line interface.
              </Card.Text>
              <Button
                variant="outline-success"
                href="https://github.com/mwallis5110/Employee_Tracker_HW12"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        {/* Note Taker Card */}
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "20rem" }}>
            <CardImg top width="100%" src={Note} alt="Note Taker gif" />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>A note taking app built using ExpressJS.</Card.Text>
              <Button
                variant="outline-success"
                href="https://github.com/mwallis5110/Note_Taker_HW11"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        {/* Fitness Tracker Card */}
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
                This program uses NoSQL and MongoDB to input and track your
                workout stats.
              </Card.Text>
              <Button
                variant="outline-success"
                href="https://github.com/mwallis5110/Fitness_Tracker_HW_15"
              >
                Repository
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div> //Bottom container div
  );
}
