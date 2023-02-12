import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Main.css'

const Main = (props) => {
  const data = props.insurance;
  // console.log(data);
  const { insurance, selectedInsurance, setSelectedInsurance } = props;

  const handleClick = (insurance) => {
    setSelectedInsurance(insurance);
  };

  return (
    <Container>
      {data.map((insurance, index) => (
        <Card key={index}>
          <Card.Header className='item-title'>{insurance.name}</Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Class: {insurance.class}</ListGroupItem>
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
      ))}
    </Container>
  );
};

export default Main;
