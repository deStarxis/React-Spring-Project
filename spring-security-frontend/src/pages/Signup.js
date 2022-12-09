import React from "react";

function Signup() {
  return (
    <form style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Enter first name"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Enter last name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Signup
      </button>
    </form>
  );
}

export default Signup;
