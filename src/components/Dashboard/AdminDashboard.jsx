import React from "react";
import Header from "../../components/others/Header";
import CreateTask from "../../components/others/CreateTask";
import AllTask from "../../components/others/AllTask";

const AdminDashboard = () => {

  return (
    <div className="h-screen w-full p-10 text-white">
       <Header />
        <CreateTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;
