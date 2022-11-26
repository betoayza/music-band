import React from "react";
import { SliderAlbums } from "./SliderAlbums";
import { SliderPresentation } from "./SliderPresentation";
import concertImage from "../img/concert.jpg";

export const Home = () => {
  return (
    <div>
      {/* <SliderPresentation /> */}
      <img src={concertImage} className={"img-fluid"} alt="Concert" />
      <SliderAlbums />
    </div>
  );
};
