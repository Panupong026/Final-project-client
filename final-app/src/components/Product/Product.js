import React from "react";
import { Navbar, Nav, Container, Image, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = (props) => {
    console.log(props);

    return (
        <div>
            <Container>
                <h1>{props.selectedInsurance.name}</h1>
                <ul>
                    class: <li>{props.selectedInsurance.class}</li>
                    Price: <li>{props.selectedInsurance.price}</li>
                </ul>
                <Nav.Link
                    as={Link}
                    to={"/login"}
                >
                    Buy as agent
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to={"/forms"}
                >
                    Buy as customer
                </Nav.Link>
            </Container>
        </div>
    );
};

export default Product;
