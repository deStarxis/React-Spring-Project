import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAddress from "../components/Address/AddAddress";
import AddressList from "../components/Address/AddressList";
import AddCategory from "../components/Category/AddCategory";
import CategoryList from "../components/Category/CategoryList";
import AddProduct from "../components/Product/AddProduct";
import ProductList from "../components/Product/ProductList";
import AddReview from "../components/Review/AddReview";
import ReviewList from "../components/Review/ReviewList";
import Header from "../Header";
import Login from "./Login";
import Signup from "./Signup";

function Dashboard() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/add"} element={<AddProduct />} />
        <Route path={"/categories"} element={<CategoryList />} />
        <Route path={"/categories/add"} element={<AddCategory />} />
        <Route path={"/addresses"} element={<AddressList />} />
        <Route path={"/addresses/add"} element={<AddAddress />} />
        <Route path={"/reviews"} element={<ReviewList />} />
        <Route path={"/reviews/add"} element={<AddReview />} />
      </Routes>
    </>
  );
}

export default Dashboard;
