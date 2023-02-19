import React from "react";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  let navigate = useNavigate();

  return (
    <div
      className={"text-center"}
      style={{ display: "grid", placeItems: "center" }}
    >
      <h1 style={{ color: "#adff2f" }}>Error 404: resource not founded</h1>
      <button className={"btn btn-dark"} onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};
