import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const initalState = [];
  const [productList, setProductList] = useState(initalState);
  async function fetchProducts() {
    const response = await axios.get("http://localhost:8080/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setProductList(response.data);
  }
  const handleProductDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/products/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setProductList(productList.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
                  <Link
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    to={`/products/${data.id}`}
                  >
                    Update
                  </Link>
                  <Link
                    className="btn btn-success"
                    style={{ marginRight: "20px" }}
                    to={`/products/${data.id}/reviews`}
                  >
                    View Reviews
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleProductDelete(data.id)}
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

export default ProductList;
