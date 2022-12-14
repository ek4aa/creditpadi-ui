import React from "react";
import { Header } from "../../components";

function Home() {
  return (
    <>
      <Header />
      <SiteContainer />
    </>
  );
}

function SiteContainer() {
  return (
    <section className="site_container">
      <div className="container-lg h-100 m-auto position-relative">
        <div className="col-8 col-md-6 col-lg-5 banner-mockup">
          <img
            className="img-fluid"
            src="./assets/banner/mobile-group.png"
            alt="mobile-group.png"
          />
        </div>
        <div className="row d-flex align-items-center banner-content h-100">
          <div className="col-12 col-sm-8 col-lg-6 mt-2 mt-md-0 pe-0">
            <h1 className="display-4 fw-bold mb-3">
              Manage your expenses intelligently with Creditpadi
            </h1>
            <h6 className="mb-4 fw-light pe-0 pe-sm-5 pe-lg-5 mb-3">
              Creditpadi helps African freelancers and teams to easily manage
              and automate their expenses., and receive payment from anywhere
              with our corporate card.
            </h6>
            <div className="input-group mb-3 get-started-area">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Enter your phone number"
                aria-label="Enter your phone number"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-warning rounded-pill text-light"
                type="button"
                id="button-addon2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Home };
