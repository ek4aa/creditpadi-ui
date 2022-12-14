import React from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <div className="authframe">
      <div className="signin-content grid grid-cols-1 md:grid-cols-2 md:h-full">
        <div className="left-panel hidden md:block bg-blue position-relative"></div>
        <div className="right-panel">
          <div className="row g-3 justify-content-end mx-5 my-auto">
            <div class="col-auto">
              <label class="col-form-label">I don’t have an account. </label>
            </div>
            <div class="col-auto">
              <button
                type="button"
                className="btn btn-default rounded-pill px-4"
                onClick={() => handleClick("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <form className="h-full">
            <div class="mb-3">
              <h2 className="page-title">Welcome Back</h2>
              <h5 className="">Sign In your Creditpadi account</h5>
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
            <button type="submit" className="btn btn-default rounded-pill px-4">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Signin };
