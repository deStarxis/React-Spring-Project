import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
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
      <form style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
        <h3>Add New Product</h3>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter product name"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="Enter price"
            required
          />
        </div>
        <div class="form-group">
          <label for="rating">Rating</label>
          <input
            type="number"
            class="form-control"
            id="rating"
            placeholder="Enter rating"
            required
          />
        </div>
        <div class="form-group">
          <label for="text">Category</label>
          <select class="form-control" id="category">
            <option selected disabled>
              Open this select menu
            </option>
            <option value="1">Phone</option>
            <option value="2">Watch</option>
            <option value="3">Laptop</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
