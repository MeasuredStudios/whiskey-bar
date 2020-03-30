import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import { X } from 'react-feather';

import brand from '../assets/img/brand.svg';

const NavBar = (): JSX.Element => (
  <Navbar expand="lg" variant="light" bg="white">
    <Container fluid>
      <Navbar.Brand href="">
        <img src={brand} className="navbar-brand-img" alt="Swigged App" />
      </Navbar.Brand>
      <NavbarToggle
        as="button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </NavbarToggle>
      <Navbar.Collapse id="navbarCollapse" className="collapse">
        <Navbar.Toggle
          as="button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
        >
          <X />
        </Navbar.Toggle>
        <Nav as="ul" navbar className="ml-auto">
          <Nav.Item as="li">
            <Nav.Link
              href="https://www.instagram.com/swiggedapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              href="https://www.facebook.com/pg/SwiggedApp/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              href="https://twitter.com/SwiggedApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <a
          className="navbar-btn btn btn-sm btn-primary lift ml-auto"
          href="./signin-cover.html"
        >
          Login
        </a>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
