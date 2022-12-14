import React from "react";

function Header() {
  return (
    <header className="site_header">
      <nav className="container-lg d-flex justify-content-between m-auto">
        <div className="brand my-auto">
          <a className="navbar-brand" href="#">
            Creditpadi
          </a>
        </div>
        <div className="navs_wrapper">
          <ul className="navs d-flex">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-warning rounded-pill text-light mx-3" type="button">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
