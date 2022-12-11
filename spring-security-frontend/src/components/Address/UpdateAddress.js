import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateAddress() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    street: "",
    zip: null,
    city: "",
  });
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress({ ...address, [name]: value });
  };
  async function fetchAddress() {
    const response = await axios.get(`http://localhost:8080/addresses/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setAddress(response.data);
  }
  useEffect(() => {
    fetchAddress();
  }, [id]);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/addresses/${id}`,
        address,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate("/addresses");
    } catch (error) {
      console.log(error);
    }
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
        <h3>Update Address</h3>
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
            type="number"
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
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateAddress;
