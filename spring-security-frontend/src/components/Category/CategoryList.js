import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/data";

function CategoryList() {
  const initalState = Data.categoryList;
  const [categoryList, setCategoryList] = useState(initalState);
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

export default CategoryList;
