import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
// import logo from '../../image/logo.jpg'

const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Navbar className="header-navbar">
      <Container>
        <Navbar.Collapse>
          <Nav>
          {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
