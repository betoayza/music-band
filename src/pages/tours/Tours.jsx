import React from "react";

export const Tours = () => {
  return (
    <div>
      <h1
        className={"text-center container"}
        style={{ backgroundColor: "#e3ff00" }}
      >
        Tours
      </h1>
      <hr style={{ color: "#e3ff00" }} />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className={"text-center container"}
      >
        <div
          style={{
            color: "whitesmoke",
          }}
          className={
            "text-center border border-danger border-3 rounded-circle rounded-5 p-2"
          }
        >
          NOV
          <br />
          15 2022
        </div>
        <div className={"w-100"}>
          <p style={{ color: "#dfff00" }}>Tour 1</p>
        </div>
        <div className={""}>
          <button className={"btn btn-dark border border-success border-3"}>
            INFO
          </button>
          <button className={"btn btn-dark border border-primary border-3"}>
            TICKETS
          </button>
        </div>
      </div>
      <hr style={{ color: "#e3ff00" }} />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className={"text-center container"}
      >
        <div
          style={{
            color: "whitesmoke",
          }}
          className={
            "text-center border border-danger border-3 rounded-circle rounded-5 p-2"
          }
        >
          AUG
          <br />
          14 2022
        </div>
        <div className={"w-100"}>
          <p style={{ color: "#dfff00" }}>Tour 2</p>
        </div>
        <div>
          <button className={"btn btn-dark border border-success border-3"}>
            INFO
          </button>
          <button className={"btn btn-dark border border-primary border-3"}>
            TICKETS
          </button>
        </div>
      </div>
      <hr style={{ color: "#e3ff00" }} />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className={"text-center container"}
      >
        <div
          style={{
            color: "whitesmoke",
          }}
          className={
            "text-center border border-danger border-3 rounded-circle rounded-5 p-2"
          }
        >
          FEB
          <br />
          10 2022
        </div>
        <div className={"w-100"}>
          <p style={{ color: "#dfff00" }}>Tour 3</p>
        </div>
        <div>
          <button className={"btn btn-dark border border-success border-3"}>
            INFO
          </button>
          <button className={"btn btn-dark border border-primary border-3"}>
            TICKETS
          </button>
        </div>
      </div>
      <hr style={{ color: "#e3ff00" }} />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className={"text-center container"}
      >
        <div
          style={{
            color: "whitesmoke",
          }}
          className={
            "text-center border border-danger border-3 rounded-circle rounded-5 p-2"
          }
        >
          ENE
          <br />
          24 2022
        </div>
        <div className={"w-100"}>
          <p style={{ color: "#dfff00" }}>Tour 4</p>
        </div>
        <div>
          <button className={"btn btn-dark border border-success border-3"}>
            INFO
          </button>
          <button className={"btn btn-dark border border-primary border-3"}>
            TICKETS
          </button>
        </div>
      </div>
      <hr style={{ color: "#e3ff00" }} />
    </div>
  );
};
