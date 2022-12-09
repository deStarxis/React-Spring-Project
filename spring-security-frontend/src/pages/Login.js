import React from "react";

function Login() {
  return (
    <form style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
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
        Login
      </button>
    </form>
  );
}

export default Login;
