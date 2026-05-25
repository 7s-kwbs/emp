import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./buttons/Logout";

const SideBar = () => {

  return (
    <div 
      className={`hidden  md:flex pt-5 border-r border-gray-300  flex-col bg-white w-48 lg:w-64 min-h-screen h-full`}
    >
      {/* header */}
      <div className=" pr-5 pl-2 pb-3 border-b border-gray-300 flex gap-3 items-center">
        <div className="shrink-0 w-10 h-10 bg-blue-600 rounded-xl ml-2 flex items-center justify-center ">
          <p className="text-white font-extrabold text-xl">N</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">TaskFlow</h1>
          <p className="text-[12px] font-semibold text-gray-500">
            Management System
          </p>
        </div>
      </div>
      {/* menu  */}
    
      <div className="p-5 ">
        <NavLink
          to="/admin/dashboard"
          className={`rounded px-2 py-2  flex  items-center hover:bg-gray-100 hover:text-blue-700 active:scale-95 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              fillOpacity="0"
              d="M6 8l6 -5l6 5v12h-12v-12Z"
            >
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="1.2s"
                dur="0.15s"
                to=".3"
              />
            </path>
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <g strokeDasharray="16">
                <path d="M5 21h14">
                  <animate
                    fill="freeze"
                    attributeName="strokeDashoffset"
                    dur="0.3s"
                    values="16;0"
                  />
                </path>
                <path strokeDashoffset="16" d="M5 21v-13M19 21v-13">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.3s"
                    dur="0.3s"
                    to="0"
                  />
                </path>
              </g>
              <path
                strokeDasharray="28"
                strokeDashoffset="28"
                d="M2 10l10 -8l10 8"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.6s"
                  to="0"
                />
              </path>
            </g>
          </svg>
          <span className="pl-2">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/profile"
          className={`rounded px-2 py-2   flex  items-center hover:bg-gray-100 active:scale-95 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <g
              fill="currentColor"
              fillOpacity="0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="22"
                d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="22;0"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.4s"
                  to="1"
                />
              </path>
              <path
                strokeDasharray="38"
                strokeDashoffset="38"
                d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.5s"
                  to="0"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.4s"
                  to="1"
                />
              </path>
            </g>
          </svg>
          <span className="pl-2">Profile</span>
        </NavLink>
      </div>
    <div className="mt-auto p-2 border-t border-gray-200 flex justify-center">
        <Logout />
    </div>
    </div>
  );
};

export default SideBar;
