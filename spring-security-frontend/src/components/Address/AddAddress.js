import React from "react";
import { Link } from "react-router-dom";

function AddAddress() {
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/addresses"
        className="btn btn-danger"
        id="back"
        style={{ marginBottom: "20px" }}
      >
        Back to Main
      </Link>
      <form style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
        <h3>Add New Address</h3>
        <div class="form-group">
          <label for="street">Street address</label>
          <input
            type="text"
            class="form-control"
            id="street"
            placeholder="Enter street address"
            required
          />
        </div>
        <div class="form-group">
          <label for="zip">Zip Code</label>
          <input
            type="text"
            class="form-control"
            id="zip"
            placeholder="Enter zip code"
            required
          />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder="Enter city"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAddress;
