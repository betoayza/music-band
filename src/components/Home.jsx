import React from "react";
import { SliderAlbums } from "./SliderAlbums";
import { SliderPresentation } from "./SliderPresentation";
import concertImage from "../img/concert.jpg";

export const Home = () => {
  return (
    <div className="container text-center">
      <h1 style={{ color: "white" }}>The Band</h1>
      <img
        src={concertImage}
        className={"img-fluid img-thumbnail"}
        alt="Concert"
        // style={{ maxHeight: "500px", maxWidth: "100vw", height: "500px" }}
      />
      <div className={"container p-2"}>
        <SliderAlbums />
      </div>
    </div>
  );
};
