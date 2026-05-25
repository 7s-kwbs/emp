import React, { useState } from "react";
import Header from "../../components/others/Header";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className=" bg-blue-50 min-h-screen flex ">

      <SideBar />

      <div className="  w-full h-screen overflow-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
