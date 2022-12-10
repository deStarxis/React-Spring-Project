import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: null,
    rating: "",
    category: "",
  });
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    alert(
      `${product.name},${product.price},${product.rating},${product.category}`
    );
    navigate("/");
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/"
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
        <h3>Add New Product</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={onValueChanged}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={onValueChanged}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={onValueChanged}
            placeholder="Enter rating"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={onValueChanged}
          >
            <option selected value="none">
              ---------------------
            </option>
            <option value="Phone">Phone</option>
            <option value="Watch">Watch</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
