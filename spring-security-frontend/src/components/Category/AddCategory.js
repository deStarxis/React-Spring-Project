import React from "react";
import { Link } from "react-router-dom";

function AddCategory() {
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/categories"
        className="btn btn-danger"
        id="back"
        style={{ marginBottom: "20px" }}
      >
        Back to Main
      </Link>
      <form style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
        <h3>Add New Category</h3>
        <div class="form-group">
          <label for="categoryName">Category Type</label>
          <input
            type="text"
            class="form-control"
            id="categoryName"
            placeholder="Enter category type"
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

export default AddCategory;
