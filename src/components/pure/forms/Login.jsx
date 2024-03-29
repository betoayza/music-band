// import { API } from "../api/api";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal } from "../Modal";

const initialForm = {
  data: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [modal, setModal] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClean = (e) => {
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const options = {
    //   url: `${API}/login`,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     Accept: "application/json",
    //   },
    //   params: form,
    //   timeout: 3000,
    // };
    // console.log(form);
    // await axios
    //   .request(options)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data) {
    //       //case generic user
    //       if (res.data.type === "Estandar") {
    //         const code = res.data.code;
    //         const username = res.data.username;
    //         navigate(`/user/${username}/${code}`);
    //         //case admin
    //       } else {
    //         navigate("/admin");
    //       }
    //     } else {
    //       setIsError(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    handleClean();
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleClose = () => {
    setIsError(false);
  };

  return isError ? (
    <Modal>
      <div>
        <h2>Error: wrong credentials or banned user :(</h2>
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  ) : (
    <div className={"h-auto d-grid align-items-center"}>
      <div
        className={"w-50 d-grid justify-content-center text-center container"}
      >
        <h2 className={"text-center"} style={{ color: "#6610f2" }}>
          Login
        </h2>

        <div className={"w-100 justify-content-md-center"}>
          <form onSubmit={handleSubmit} className={"container"}>
            <input
              type="text"
              className="form-control w-100"
              name="data"
              placeholder="Email o usuario..."
              value={form.data}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control w-100"
              name="password"
              placeholder="Password..."
              value={form.password}
              onChange={handleChange}
              required
            />

            <div className={"d-flex justify-content-center m-1"}>
              <button type="submit" className="btn btn-primary">
                Go
              </button>

              <button
                type="reset"
                className="btn btn-danger"
                onClick={handleClean}
              >
                Clean
              </button>

              <button
                type="button"
                className="btn btn-dark"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
