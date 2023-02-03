import React from "react";
import imageDrum from "../img/Albums/drum.jpg";
import imageMicro from "../img/Albums/micro.jpg";
import imageElectronic from "../img/Albums/electronic.jpg";
import { NavLink } from "react-router-dom";

export const SliderAlbums = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      style={{ maxWidth: "100vw", height: "50%" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <NavLink to={`/albums`}>
            {({ isActive }) => (
              <a
                className={isActive ? "nav-link" : "nav-link"}
                style={{ color: "#e3ff00" }}
              >
                <img src={imageDrum} className="d-block w-100 rounded" alt="Drum" />
              </a>
            )}
          </NavLink>

          <div className="carousel-caption d-none d-md-block">
            <h3>
              <span className="badge bg-dark" style={{ color: "#e3ff00" }}>
                Album 1
              </span>
            </h3>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <NavLink to={`/albums`}>
            {({ isActive }) => (
              <a
                className={isActive ? "nav-link" : "nav-link"}
                style={{ color: "#e3ff00" }}
              >
                <img
                  src={imageElectronic}
                  className="d-block w-100 rounded"
                  alt="Electronic"
                />
              </a>
            )}
          </NavLink>
          <div className="carousel-caption d-none d-md-block">
            <h3>
              <span className="badge bg-dark" style={{ color: "#e3ff00" }}>
                Album 2
              </span>
            </h3>
          </div>
        </div>

        <div className="carousel-item">
          <NavLink to={`/albums`}>
            {({ isActive }) => (
              <a
                className={isActive ? "nav-link" : "nav-link"}
                style={{ color: "#e3ff00" }}
              >
                <img src={imageMicro} className="d-block w-100 rounded" alt="Micro" />
              </a>
            )}
          </NavLink>

          <div className="carousel-caption d-none d-md-block">
            <h3>
              <span className="badge bg-dark" style={{ color: "#e3ff00" }}>
                Album 3
              </span>
            </h3>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
