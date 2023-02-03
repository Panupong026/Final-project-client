import React from "react";
import { Card, Container } from "react-bootstrap";
import './Main.css'

const Main = () => {
  return (
    <Container>
      <h1 className="text-center mb-5">Choose your insurance</h1>
      <div className="d-flex">
        <Card className="card-container mb-5">
          <Card.Body>
            <Card.Title>TIP Premium Plus</Card.Title>
            <Card.Text>
              <p>Class: 1+</p>
              <p>Starter price: xxxx</p>
              <a href="/buy">Buy</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-container mb-5">
          <Card.Body>
            <Card.Title>TIP Premium</Card.Title>
            <Card.Text>
              <p>Class: 1</p>
              <p>Starter price: xxxx</p>
              <a href="/buy">Buy</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-container mb-5">
          <Card.Body>
            <Card.Title>TIP Up to mile</Card.Title>
            <Card.Text>
              <p>Class: 1</p>
              <p>Starter price: xxxx</p>
              <a href="/buy">Buy</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-container mb-5">
          <Card.Body>
            <Card.Title>TIP Shock price</Card.Title>
            <Card.Text>
              <p>Class: 1</p>
              <p>Starter price: xxxx</p>
              <a href="/buy">Buy</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Main;
