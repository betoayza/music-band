import React from "react";
import image1 from "../../img/Gallery/gallery-1.jpg";
import image2 from "../../img/Gallery/gallery-2.jpg";
import image3 from "../../img/Gallery/gallery-3.jpg";

export const Gallery = () => {
  return (
    <div className={"w-100 container text-center"}>
      <h1 style={{ color: "white" }}>Gallery</h1>
      <div className={"row row-cols-auto"}>
        <div className={""}>
          <figure>
            <img
              src={image1}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              // style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }} className={"text-center"}>
              Photo 1
            </figcaption>
          </figure>
        </div>
        <div className={""}>
          <figure>
            <img
              src={image2}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              // style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }} className={"text-center"}>
              Photo 2
            </figcaption>
          </figure>
        </div>
        <div className={""}>
          <figure>
            <img
              src={image3}
              className={"rounded img-fluid img-thumbnail"}
              alt="Album"
              // style={{ width: "200px", height: "200px" }}
            />
            <figcaption style={{ color: "#adff2f" }} className={"text-center"}>
              Photo 3
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
