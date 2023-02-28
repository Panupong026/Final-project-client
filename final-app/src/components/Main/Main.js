import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './Main.css'

const Main = (props) => {
  const data = props.insurance;
  // console.log(data);
  const { insurance, selectedInsurance, setSelectedInsurance } = props;

  const handleClick = (insurance) => {
    setSelectedInsurance(insurance);
  };

  let test

  try {
    test = data.map((insurance, index) => (
      <div key={index}>
        <Container>
          <Card key={index}>
            <Card.Header className='item-title'>{insurance.name}</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Class: {insurance.coverage_class}</ListGroupItem>
              <ListGroupItem>Starter price: {insurance.price}</ListGroupItem>
              <Nav.Link
                as={Link}
                to={"/product"}
                onClick={() => handleClick(insurance)}
              >
                More detail
              </Nav.Link>
            </ListGroup>
          </Card>
        </Container>
      </div>
    )
    )
  } catch (error) {
  }

  return (
    <div className="out-border">
      <h1>Please choose your insurance</h1>
    <div className="slideshow-container">
      {test}
    </div>
    </div>
  );
};

export default Main;
