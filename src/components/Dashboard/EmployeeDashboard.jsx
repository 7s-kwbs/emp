import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {

  return (
    <div className=" px-10 bg-blue-100 min-h-screen ">
        <Header />
        <TaskListNumber />
        <div className="flex flex-col md:flex-row gap-5">
          <TaskList />
          <div className=" flex flex-col md:w-3/5 gap-5 md:mt-10 mb-10  w-full ">
            <div className="bg-white h-75 rounded-lg p-5 w-full">Upcomming Deadlines</div>
            <div className="bg-white h-75 rounded-lg p-5 w-full">Recent Notification</div>
          </div>
        </div>
        
    </div>
  );
};

export default EmployeeDashboard;
