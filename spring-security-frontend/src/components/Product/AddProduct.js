import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "../../data/data";

function AddProduct() {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState(Data.categoryList);
  const [product, setProduct] = useState({
    name: "",
    price: null,
    rating: "",
    category: Object,
  });
  async function fetchCategories() {
    const response = await axios.get("http://localhost:8080/categories", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(response.data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    product.category = JSON.parse(product.category);
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        product,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
            {categoryList.map((item) => {
              return (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.name}
                </option>
              );
            })}
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
