import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAddress from "../components/Address/AddAddress";
import AddressList from "../components/Address/AddressList";
import UpdateAddress from "../components/Address/UpdateAddress";
import AddCategory from "../components/Category/AddCategory";
import CategoryList from "../components/Category/CategoryList";
import UpdateCategory from "../components/Category/UpdateCategory";
import AddProduct from "../components/Product/AddProduct";
import ProductList from "../components/Product/ProductList";
import UpdateProduct from "../components/Product/UpdateProduct";
import ReviewList from "../components/Review/ReviewList";
import UpdateReview from "../components/Review/UpdateReview";
import Header from "../Header";
import Login from "./Login";
import Signup from "./Signup";

function Dashboard() {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      <Header />
      <Routes>
        {accessToken ? (
          <>
            <Route path={"/"} element={<ProductList />} />
            <Route path={"/add"} element={<AddProduct />} />
            <Route path={"/products/:id"} element={<UpdateProduct />} />
            <Route path={"/categories/:id"} element={<UpdateCategory />} />
            <Route path={"/addresses/:id"} element={<UpdateAddress />} />
            <Route path={"/categories"} element={<CategoryList />} />
            <Route path={"/categories/add"} element={<AddCategory />} />
            <Route path={"/addresses"} element={<AddressList />} />
            <Route path={"/addresses/add"} element={<AddAddress />} />
            <Route path={"products/:id/reviews"} element={<ReviewList />} />
            <Route
              path={"products/:id/reviews/:reviewId"}
              element={<UpdateReview />}
            />
          </>
        ) : (
          <>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default Dashboard;
