import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddAddress() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    street: "",
    zip: "",
    city: "",
  });
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress({ ...address, [name]: value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    alert(`${address.street},${address.city},${address.zip}`);
    navigate("/addresses");
  };
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
      <form
        style={{ width: "50%", margin: "auto", marginTop: "30px" }}
        onSubmit={onFormSubmit}
      >
        <h3>Add New Address</h3>
        <div className="form-group">
          <label htmlFor="street">Street address</label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={address.street}
            onChange={onValueChanged}
            placeholder="Enter street address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={onValueChanged}
            placeholder="Enter zip code"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={address.city}
            onChange={onValueChanged}
            placeholder="Enter city"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAddress;
