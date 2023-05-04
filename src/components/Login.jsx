import "../assets/styles/login.css";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { result } from "../utils/helper";

const Login = () => {
  const registrationData = JSON.parse(localStorage.getItem("registration"));

  const navigate = useNavigate();
  const [loginData, setRegData] = useState({
    // email: "",
    // password: "",
  });

  const [error, setError] = useState({});
  // const [issubmit, setIsSubmit] = useState(false);

  const hasChange = (e) => {
    const { name, value } = e.target;

    setRegData((prev) => {
      return { ...prev, [name]: value };
    });

    setError(validate(loginData));
  };

  const validate = (loginData) => {
    const error = {};

    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!regex?.test(loginData["email"])) {
      error.email = "email is required";
    }

    if (loginData["password"]?.length <= 4) {
      error.password = "password is required";
    } else {
      for (const key in registrationData) {
        if (
          registrationData[key].email !== loginData.email ||
          registrationData[key].password !== loginData.password
        ) {
          error.login = "email & password is not correct";
          break;
        } else {
          // error.login = ""
          setError((prev) => {
            return {
              ...prev,
              login: "",
            };
          });
          break;
        }
      }
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    hasChange(e);
    //  setError(validate(loginData));
    // setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      let flag = false;
      for (const key in registrationData) {
        if (
          registrationData[key].email === loginData.email ||
          registrationData[key].password === loginData.password
        ) {
          flag = true;
          break;
        }
      }

      if (flag === true) {
        loginData["token"] = result;
        localStorage.setItem("logindata", JSON.stringify(loginData));
        navigate("/transaction");
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>
      <div className="form">
        <h2>Login Form</h2>
        <form onSubmit={submitHandler} method="POST">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            className="inputFields"
            value={loginData.email}
            onChange={(e) => hasChange(e)}
          ></input>
          <span>{error.email}</span>
          <br></br>
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            className="pswFields"
            value={loginData.password}
            onChange={(e) => hasChange(e)}
          ></input>
          <span>{error.password}</span>
          <span>{error.login}</span>
          <br></br>
          <button type="submit" id="submit" className="ViewBtn">
            Submit
          </button>
          <br></br>
        </form>
        <Link to={"/public/registration"} className="loginBtn">
          Registration
        </Link>
      </div>
    </>
  );
};

export default Login;
