import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <div className="bg-[#f5f5f5] py-10 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
