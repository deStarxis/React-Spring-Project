import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/data";

function ProductList() {
  const initalState = Data.productList;
  const [productList, setProductList] = useState(initalState);
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/add"
        className="btn btn-success"
        id="AddNewCountry"
        style={{ marginBottom: "20px" }}
      >
        Add New Product
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.rating}</td>
                <td>{data.category.name}</td>
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

export default ProductList;
