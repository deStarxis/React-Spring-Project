import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryList, setCategoryList] = useState([]);
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
  async function fetchProduct() {
    const response = await axios.get(`http://localhost:8080/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setProduct(response.data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `http://localhost:8080/categories/${product.category}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const category = response.data;
    try {
      const payload = {
        name: product.name,
        price: product.price,
        rating: product.rating,
        category: category,
      };
      const response = await axios.put(
        `http://localhost:8080/products/${id}`,
        payload,
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
        <h3>Update Product</h3>
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
            value={product.category.id}
            onChange={onValueChanged}
          >
            {categoryList.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
