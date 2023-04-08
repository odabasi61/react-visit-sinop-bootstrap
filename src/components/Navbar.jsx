import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top bg-black">
        <div className="container-fluid px-4">
          <Link to={'/'} className="navbar-brand text-white fs-4 fw-bold" href="#">
            Northern Star
          </Link>

          <ul className="d-none d-lg-flex gap-4 align-items-center list-unstyled mb-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link text-white" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="history">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="geography">
                Geography
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="culture">
                Culture
              </a>
            </li>
          </ul>

          <button
            className="navbar-toggler bg-white d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title border-bottom border-dark pb-1 w-100"
                id="offcanvasNavbarLabel"
              >
                Northern Star
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={'/'}
                    className="nav-link text-black"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="history">
                    History
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="geography">
                    Geography
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="culture">
                    Culture
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
