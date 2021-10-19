import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="py-0"
      >
        <Container className="nav-style">
          <Navbar.Brand className="p-0">
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                width="150px"
                alt=" logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>

              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact us</Link>
            </Nav>

            <Nav>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
