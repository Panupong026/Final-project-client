import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css'
// import logo from '../../image/logo.jpg'

const Footer = () => {
    return (
        <Navbar className="footer-navbar">
            <Container>
                {/* <Image className="logo" src={logo} alt='First Jobber Choice' /> */}
                <Navbar.Collapse>
                    <Nav className="footer-item">
                        <Nav.Item>
                            <Nav.Link as={Link} to="#">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="#">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="#">Terms of Use</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="#">Privacy Policy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <p className="footer-text">Copyright @Panupong Trimongkol</p>
            </Container>
        </Navbar>
    );
};

export default Footer;
