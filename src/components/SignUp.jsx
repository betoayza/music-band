// import { API } from "../api/api";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal } from "./Modal";

const initialForm = {
  code: Date.now(),
  email: "",
  username: "",
  password: "",
  type: "Standard",
  status: "Active",
};

const SignUp = () => {
  const [form, setForm] = useState(initialForm);
  const [modal, setModal] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [newUser, setNewUser] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // const options = {
    //   url: `${API}/signup`,
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     Accept: "application/json",
    //   },
    //   data: form,
    //   timeout: 3000,
    // };
    // console.log(form);

    // await axios
    //   .request(options)
    //   .then((res) => {
    //     console.log(res.data);
    //     setModal(true);
    //     if (res.data) {
    //       if (res.data && res.data.type === "Admin") {
    //         setNewUser("Admin");
    //         setIsSuccessful(true);
    //       } else {
    //         if (res.data && res.data.type === "Estandar") {
    //           setNewUser(res.data.username);
    //           setIsSuccessful(true);
    //         }
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    handleClean();
  };

  const handleClean = (e) => {
    setForm({ ...initialForm, code: Date.now() });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleClose = () => {
    setModal(false);
    setIsSuccessful(false);
  };

  return modal ? (
    <Modal>
      {isSuccessful ? (
        <div>
          <h2>
            Sign Up successful! Welcome{" "}
            <span style={{ color: "#39ff14" }}>@{newUser}</span> ;)
          </h2>
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </div>
      ) : (
        <div>
          <h2>Error: user / email already exists :(</h2>
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </Modal>
  ) : (
    <div
      className={"h-auto w-100"}
      style={{ display: "grid", placeItems: "center" }}
    >
      <div className="form-group">
        <h2 className={"text-center"} style={{ color: "#6610f2" }}>Sign Up</h2>
        <form onSubmit={handleSubmit} className={"container"}>
          <input
            type="hidden"
            className="form-control w-100"
            name="code"
            value={form.code}
          />

          <input
            type="email"
            className="form-control w-100"
            name="email"
            placeholder="Email..."
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control w-100"
            name="username"
            placeholder="Username..."
            value={form.username}
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

          <input
            type="hidden"
            className="form-control"
            name="type"
            value={form.type}
          />

          <input
            type="hidden"
            className="form-control"
            name="status"
            value={form.status}
          />

          <div className="m-1">
            <button type="submit" className="btn btn-primary">
              Send
            </button>

            <button
              type="reset"
              className="btn btn-danger"
              onClick={handleClean}
            >
              Clean
            </button>

            <button type="button" className="btn btn-dark" onClick={handleBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
