import React from "react";
import { SliderAlbums } from "./SliderAlbums";
import { SliderPresentation } from "./SliderPresentation";
import concertImage from "../img/concert.jpg";

export const Home = () => {
  return (
    <div>
      {/* <SliderPresentation /> */}
      <img
        src={concertImage}
        className={"img-fluid"}
        alt="Concert"
        // style={{ maxHeight: "500px", maxWidth: "100vw", height: "500px" }}
      />
      <SliderAlbums />
    </div>
  );
};
