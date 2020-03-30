import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section = (): JSX.Element => (
  <section className="pt-8 pt-md-11">
    <Container>
      <Row>
        <Col>
          <div className="col-10 col-sm-8 col-md-6 order-md-2">
            <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
              <div className="device device-iphonex" data-aos="fade-left">
                <img
                  src="assets/img/screenshots/mobile/home.png"
                  className="device-screen"
                  alt="..."
                />
                <img
                  src="assets/img/devices/iphonex.svg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div
                className="device device-iphonex"
                data-aos="fade-left"
                data-aos-delay={150}
              >
                <img
                  src="assets/img/screenshots/mobile/rental.png"
                  className="device-screen"
                  alt="..."
                />
                <img
                  src="assets/img/devices/iphonex.svg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
            <h1 className="font-weight-bold">
              Create with <span className="text-primary">friends.</span> <br />
              Anywhere in the world.
            </h1>
            <p className="font-size-lg text-muted mb-6">
              Welcome to Swigged, the simplest way to build cocktails
              socially...
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
                  <button
                    type="button"
                    id="signUpButton"
                    data-toggle="modal"
                    href="#modalSignUpVertical"
                    className="btn btn-primary"
                    disabled
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
