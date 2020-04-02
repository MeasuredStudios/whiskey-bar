import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import photo7 from '../assets/img/photos/photo-7.jpg';

function SignUpModalV(): JSX.Element {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Button
          variant="primary"
          as="button"
          type="button"
          id="signUpButton"
          onClick={handleShow}
        >
          Sign Up
        </Button>
        <p>Testing out the Modal!</p>
      </div>

      <Modal
        id="modalSignUpVertical"
        role="dialog"
        show={show}
        onHide={handleClose}
        aria-labelledby="modalSignUpVerticalTitle"
      >
        {/* ModalDialog */}
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Card */}
            <div className="card">
              {/* Button Close */}
              <Button
                bsPrefix="modal-close close text-white"
                as="button"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">×</span>
              </Button>
              {/* Image */}
              <img src={photo7} alt="..." className="card-img-top" />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  <svg
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              {/* Card.Body */}
              <div className="card-body">
                {/* Heading */}
                <h2
                  className="mb-0 font-weight-bold text-center"
                  id="modalSignupVerticalTitle"
                >
                  Sign Up
                </h2>
                {/* Text */}
                <p className="mb-6 text-center text-muted">
                  We will be emailing you in minutes.
                </p>
                {/* Form */}
                <form
                  className="mb-6"
                  name="modalSignUp"
                  method="POST"
                  data-netlify="true"
                >
                  {/* Form.Group */}
                  <div className="form-group">
                    {/* Form.Label */}
                    <label
                      className="sr-only"
                      htmlFor="registrationFirstNameModal"
                    >
                      First name
                    </label>
                    {/* Form.Control */}
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="registrationFirstNameModal"
                      placeholder="First name"
                      required
                    />
                  </div>
                  {/* Form.Group */}
                  <div className="form-group">
                    {/* Form.Label */}
                    <label
                      className="sr-only"
                      htmlFor="registrationLastNameModal"
                    >
                      Last name
                    </label>
                    {/* Form.Control */}
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="registrationLastNameModal"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  {/* Form.Group */}
                  <div className="form-group">
                    {/* Form.Label */}
                    <label
                      className="sr-only"
                      htmlFor="modalSignUpVerticalEmail"
                    >
                      Your email
                    </label>
                    {/* Form.Control */}
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="modalSignUpVerticalEmail"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  {/* Form.Group */}
                  <div className="form-group mb-5">
                    {/* Form.Label */}
                    <label
                      className="sr-only"
                      htmlFor="modalSignUpVerticalUsername"
                    >
                      Create a Username
                    </label>
                    {/* Form.Control */}
                    <input
                      type="username"
                      name="username"
                      className="form-control"
                      id="modalSignUpVerticalUsername"
                      placeholder="Create a username"
                      required
                    />
                  </div>
                  {/* Button Submit */}
                  <button className="btn btn-block btn-primary" type="submit">
                    Sign up
                  </button>
                </form>
                {/* Text */}
                <p className="mb-0 font-size-sm text-center text-muted">
                  Already have an account?
                  <a href="">Log in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignUpModalV;
