import React from "react";
import Chef from "../images/sous-chef.PNG";
import { Card, CardImg, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="container">
      <h1>My Work</h1>
      <p>
        These are just a few of the many projects I've had the pleasure of
        working on:
      </p>
      <Row>
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <CardImg top width="100%" src={Chef} alt="Sous Chef Screenshot" />
            <Card.Body>
              <Card.Title>Sous Chef</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <CardImg top width="100%" src={Chef} alt="Sous Chef Screenshot" />
            <Card.Body>
              <Card.Title>Sous Chef</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div> //Bottom container div
  );
}
