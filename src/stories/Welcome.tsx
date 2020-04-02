import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import iphonex from '../assets/img/devices/iphonex.svg';
import home from '../assets/img/screenshots/mobile/home.png';
import rental from '../assets/img/screenshots/mobile/rental.png';

const Welcome = (): JSX.Element => (
  <section className="pt-8 pt-md-11">
    <Container>
      <Row className="align-items-center justify-content-center justify-content-md-between">
        <Col xs="8" md={{ span: 6, order: 2 }} className="col-10">
          <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
            <div className="device device-iphonex" data-aos="fade-left">
              <img
                src={home}
                className="device-screen"
                alt="Screenshot of the home page on a mobile device"
              />
              <img
                src={iphonex}
                className="img-fluid"
                alt="SVG outline of an iPhone X"
              />
            </div>
            <div
              className="device device-iphonex"
              data-aos="fade-left"
              data-aos-delay={150}
            >
              <img
                src={rental}
                className="device-screen"
                alt="A second screenshot of the home page on a mobile device"
              />
              <img
                src={iphonex}
                className="img-fluid"
                alt="SVG outline of an iPhone X"
              />
            </div>
          </div>
        </Col>
        <Col md="6" lg="5" className="col-12" data-aos="fade-right">
          <h1 className="font-weight-bold">
            Create with <span className="text-primary">friends.</span> <br />
            Anywhere in the world.
          </h1>
          <p className="font-size-lg text-muted mb-6">
            Welcome to Swigged, the simplest way to build cocktails socially...
          </p>
          <form
            className="mb-6 mb-md-8 mb-md-0 order-md-1"
            name="signUp"
            id="signUpForm"
            data-state="needingEmail"
          >
            <div className="form-row">
              <div className="col">
                <input
                  type="email"
                  id="signUpInput"
                  className="form-control bg-light border-0"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-auto">
                <Button
                  variant="primary"
                  as="button"
                  type="button"
                  id="signUpButton"
                  disable
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  </section>
);
