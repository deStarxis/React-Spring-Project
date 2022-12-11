import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Signup() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [signupState, setSignupState] = useState(initialState);
  const navigate = useNavigate();
  const onSignupClicked = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/uaa/signup",
        signupState
      );
      console.log(response.data);
      toast.success("Signup Successful", {
        autoClose: 1000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      method="POST"
      onSubmit={onSignupClicked}
      style={{ width: "50%", margin: "auto", marginTop: "30px" }}
    >
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          onChange={(e) =>
            setSignupState({ ...signupState, firstName: e.target.value })
          }
          placeholder="Enter first name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          onChange={(e) =>
            setSignupState({ ...signupState, lastName: e.target.value })
          }
          placeholder="Enter last name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={(e) =>
            setSignupState({ ...signupState, email: e.target.value })
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
            setSignupState({ ...signupState, password: e.target.value })
          }
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
}

export default Signup;
