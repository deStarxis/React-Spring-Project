import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Data from "../../data/data";

function AddressList() {
  let initalState = Data.addressList;
  const [addressList, setAddressList] = useState(initalState);
  async function fetchAddresses() {
    const response = await axios.get("http://localhost:8080/addresses", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setAddressList(response.data);
  }
  const handleAddressDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/addresses/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setAddressList(addressList.filter((address) => address.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAddresses();
  }, []);
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
                  <Link
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    to={`/addresses/${item.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleAddressDelete(item.id)}
                  >
                    Delete
                  </button>
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
