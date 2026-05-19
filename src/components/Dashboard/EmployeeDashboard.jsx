import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className="text-white px-10 bg-[#1C1C1C] h-screen">
        <Header data = {data}/>
        <TaskListNumber data = {data}/>
        <TaskList data = {data}/>
    </div>
  );
};

export default EmployeeDashboard;
