import React from "react";
import { SliderAlbums } from "./SliderAlbums";
import { SliderPresentation } from "./SliderPresentation";
import concertImage from "../img/concert.jpg";

export const Home = () => {
  return (
    <div className="container">
      {/* <SliderPresentation /> */}
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
