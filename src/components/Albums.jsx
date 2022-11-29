import React from "react";
import imageDrum from "../img/Albums/drum.jpg";
import imageMicro from "../img/Albums/micro.jpg";
import imageElectronic from "../img/Albums/electronic.jpg";

export const Albums = () => {
  return (
    <div className={"w-100 container"}>
      <h1>Albums</h1>
      <div className={"row row-cols-auto"}>
        <div className={""}>
          <figure>
            <img
              src={imageDrum}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }}>Album 1</figcaption>
          </figure>
        </div>
        <div className={""}>
          <figure>
            <img
              src={imageMicro}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }}>Album 2</figcaption>
          </figure>
        </div>
        <div className={""}>
          <figure>
            <img
              src={imageElectronic}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }}>Album 3</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
