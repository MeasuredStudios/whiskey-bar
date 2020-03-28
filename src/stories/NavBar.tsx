import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import brand from '../assets/img/brand.svg';

const SwiggedNav = () => (
  <Navbar expand="lg" variant="light" bg="white">
    <Container fluid>
      <Navbar.Brand href="">
        <img src={brand} className="navbar-brand-img" alt="Swigged App" />
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarCollapse">
          <Navbar.Toggle>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x" />
            </button>
            <Nav as="ul" navbar>
              <Nav.Link as="li" href="">
                Instagram
              </Nav.Link>
            </Nav>
          </Navbar.Toggle>
        </Navbar.Collapse>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default SwiggedNav;
