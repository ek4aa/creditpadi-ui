import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <div className="signup-content grid grid-cols-1 md:grid-cols-2 md:h-full">
      <div className="left-panel hidden md:block bg-blue position-relative"></div>
      <div className="right-panel">
        <div className="row g-3 justify-content-end mx-5 my-auto">
          <div class="col-auto">
            <label class="col-form-label">Already a member?</label>
          </div>
          <div class="col-auto">
            <button
              type="button"
              className="btn btn-default rounded-pill px-4"
              onClick={() => handleClick("/signin")}
            >
              Sign In
            </button>
          </div>
        </div>
        <form className="h-full">
          <div class="mb-3">
            <h3 className="page-title">Sign Up for an account</h3>
          </div>
          <div class="social-sign-btn-group mb-3">
            <button type="button" class="btn btn-outline-default">
              <img
                className="img-fluid me-3"
                src="./assets/auth/google.png"
                alt="GoogleLogo"
                width={35}
              />
              Sign Up with Google
            </button>
          </div>
          <div class="social-sign-btn-group mb-3">
            <button type="button" class="btn btn-outline-default">
              <img
                className="img-fluid me-3"
                src="./assets/auth/phone.png"
                alt="PhoneLogo"
                width={35}
              />
              Sign Up with Phone Number
            </button>
          </div>
          <div className="hr-area my-5">
            <hr />
            <p className="hr-area-context">
              Or create an account with your email
            </p>
          </div>
          <div class="row g-3 mb-3">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First Name"
              />
            </div>
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
              type="submit"
              className="btn btn-default rounded-pill px-4"
            >
              Sign Up
            </button>
        </form>
      </div>
    </div>
  );
}

export { Signup };
