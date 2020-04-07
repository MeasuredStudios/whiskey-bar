import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import

const About = () => (
  <section>
    <Container>
      <Row>
        <Col>
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            {/* Images */}
            <div className="row">
              <div className="col-6 mr-n5">
                <img
                  src="assets/img/photos/photo-23.jpg"
                  alt="..."
                  className="img-fluid mb-4 rounded"
                  data-aos="fade-right"
                  data-aos-delay={100}
                />
                <img
                  src="assets/img/photos/photo-28.jpg"
                  alt="..."
                  className="img-fluid rounded"
                  data-aos="fade-right"
                  data-aos-delay={150}
                />
              </div>
              <div className="col-6 mt-8">
                <img
                  src="assets/img/photos/photo-26.jpg"
                  alt="..."
                  className="img-fluid mb-4 rounded"
                  data-aos="fade-right"
                />
                <img
                  src="assets/img/photos/photo-24.jpg"
                  alt="..."
                  className="img-fluid rounded"
                  data-aos="fade-right"
                  data-aos-delay={50}
                />
              </div>
            </div>
            {/* / .row */}
          </div>
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
            {/* Heading */}
            <h2 className="font-weight-bold">
              Show your friends and coworkers your newest favorites.
            </h2>
            {/* Text */}
            <p className="font-size-lg text-muted mb-4">
              Creating cocktails, mocktails, beverage menus could be tough;
              having to experiment and share ingredients and measurements;
              Swigged helps you in the process.
            </p>
            {/* Button */}
            <a href="" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
