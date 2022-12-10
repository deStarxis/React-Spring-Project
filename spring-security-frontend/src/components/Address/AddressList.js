import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/data";

function AddressList() {
  let initalState = Data.addressList;
  const [addressList, setAddressList] = useState(initalState);
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/addresses/add"
        className="btn btn-success"
        id="AddNewAddress"
        style={{ marginBottom: "20px" }}
      >
        Add New Address
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Street</th>
            <th scope="col">Zip</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {addressList.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.street}</td>
                <td>{item.zip}</td>
                <td>{item.city}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddressList;
