import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddCategory() {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: "",
  });
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCategory({ ...category, [name]: value });
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/categories",
        category,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };
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
      <form
        style={{ width: "50%", margin: "auto", marginTop: "30px" }}
        onSubmit={onFormSubmit}
      >
        <h3>Add New Category</h3>
        <div className="form-group">
          <label htmlFor="categoryName">Category Type</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            name="name"
            value={category.name}
            onChange={onValueChanged}
            placeholder="Enter category type"
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

export default AddCategory;
