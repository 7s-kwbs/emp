import React from "react";
import { recentActivities } from "../data/RecentActivites";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Card from "../components/Card";
import BarChart from "../components/charts/BarChart";
import { PieChart } from "../components/charts/PieChart";

const DashboardPage = () => {
  const cards = [
    {
      title: "Total Tasks Assigned",
      total: 148,
      icon: "",
    },
  ];
  return (
    <div className="p-5 w-full">
      {/* title section */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800">
            Manager Dashboard
          </h1>
          <p className="text-sm text-gray-600 ">Overview of your team's task</p>
        </div>
        <div>
          <PrimaryButton icon={"+"} value={"Assign Task"} />
        </div>
      </div>
      {/* card section */}
      <div className="mt-3">
        <Card />
      </div>
      {/* Graph section */}
      <div className="flex flex-col 2xl:flex-row gap-4 w-full py-5">
        <div className="w-full  min-w-0 bg-white p-5 rounded-2xl shadow-md ">
          <h1 className="font-semibold text-lg">Weekly Task Completion</h1>
          <BarChart />
        </div>

        <div className="w-full 2xl:w-1/3 min-w-0 bg-white p-5 rounded-2xl  shadow-md">
          <h1 className="text-lg font-semibold">Task by Priority</h1>
          <div className=" flex justify-center items-center">
            <PieChart />
          </div>
        </div>
      </div>
      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-5">
        <h1 className="text-lg font-semibold">Recent Activities</h1>
        {recentActivities.map((activity) => {
          return (
            <div className="flex justify-between p-2 border-b border-gray-100">
              <div className="flex gap-2">
                <h2 className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center font-semibold text-gray-700">
                  {activity.name.split(" ").map((word)=> word[0]).join("").toUpperCase()}
                </h2>
                <div>
                  <p className="text-gray-900 font-medium">{activity.name}</p>
                  <p className="text-sm text-gray-500 ">{activity.task}</p>
                </div>
              </div>

              <div className="flex gap-10 items-center">
                <p className={` px-2 py-1 h-fit rounded-2xl font-medium text-sm 
                    ${activity.status == "Completed" ? "bg-green-100 text-green-700": activity.status ==  "In Progress" ? "bg-blue-100 text-blue-600" :"text-red-600 bg-red-100"}`}>
                  {activity.status}
                </p>
                <p className="text-sm font-light text-gray-500">2 hours ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
