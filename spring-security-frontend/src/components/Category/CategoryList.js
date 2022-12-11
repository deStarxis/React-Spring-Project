import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/data";

function CategoryList() {
  const initalState = Data.categoryList;
  const [categoryList, setCategoryList] = useState(initalState);
  async function fetchCategories() {
    const response = await axios.get("http://localhost:8080/categories", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setCategoryList(response.data);
  }
  const handleCategoryDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/categories/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to="/categories/add"
        className="btn btn-success"
        id="AddNewCategory"
        style={{ marginBottom: "20px" }}
      >
        Add New Category
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCategoryDelete(item.id)}
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

export default CategoryList;
