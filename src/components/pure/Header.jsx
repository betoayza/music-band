import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={`/`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link active" : "nav-link active"}
                    style={{ color: "#e3ff00" }}
                  >
                    Home
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/albums`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Albums
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/tours`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Tours
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/gallery`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Gallery
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/news`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    News
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/store`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Store
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/about`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    About
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/contact`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Contact
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/login`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Login
                  </a>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`/signup`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link" : "nav-link"}
                    style={{ color: "#e3ff00" }}
                  >
                    Sign Up
                  </a>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContenet: "center",
          }}
        >
          <a className="nav-link" href="#">
            <i
              className="bi-twitter"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </a>

          <a className="nav-link" href="#">
            <i
              className="bi-facebook"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </a>

          <a className="nav-link" href="#">
            <i
              className="bi-instagram"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
