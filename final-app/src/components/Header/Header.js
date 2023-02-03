import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
// import logo from '../../image/logo.jpg'

const Header = () => {
  return (
    <Navbar className="header-navbar">
      <Container>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
