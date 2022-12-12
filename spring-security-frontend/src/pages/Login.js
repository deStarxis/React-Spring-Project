import axios from "axios";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [loginState, setLoginState] = useState(initialState);
  const navigate = useNavigate();
  const onLoginClicked = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/uaa/login",
        loginState
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      toast.success("Login Successful", {
        autoClose: 1000,
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      method="POST"
      style={{ width: "50%", margin: "auto", marginTop: "30px" }}
      onSubmit={onLoginClicked}
    >
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={(e) =>
            setLoginState({ ...loginState, email: e.target.value })
          }
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={(e) =>
            setLoginState({ ...loginState, password: e.target.value })
          }
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
