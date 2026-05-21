import React from "react";
import { useAuth } from "../../context/AuthProvider";

const TaskListNumber = () => {
  const { empData } = useAuth();
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* New Task */}
      <div className="py-5 px-5 border bg-white border-gray-400 rounded-xl flex justify-between items-center min-w-0">
        <div>
          <h2 className="text-3xl font-bold">{empData.taskNumber.newTask}</h2>
          <h3 className="text-xl font-semibold">New Task</h3>
        </div>
        <div className="shrink-0 flex items-center justify-center bg-blue-100 rounded-xl w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="3 3 18 18">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="#0531ba" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
              <path
                strokeDasharray="66"
                d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" />
              </path>
              <g strokeDasharray="12" strokeDashoffset="12">
                <path d="M7 12h10">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" to="0" />
                </path>
                <path d="M12 7v10">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0" />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Active Task */}
      <div className="py-5 px-5 border bg-white border-gray-400 rounded-xl flex justify-between items-center min-w-0">
        <div>
          <h2 className="text-3xl font-bold">{empData.taskNumber.active}</h2>
          <h3 className="text-xl font-semibold">Active Task</h3>
        </div>
        <div className="shrink-0 flex items-center justify-center bg-orange-100 rounded-xl w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="3 3 40 40">
            <path d="M0 0h48v48H0z" fill="none" />
            <g fill="none" stroke="#e87e14" strokeLinejoin="round" strokeWidth="4">
              <path
                strokeDasharray="132"
                d="M9 6h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" from="132" to="0" dur="0.6s" />
              </path>
              <path
                strokeLinecap="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                d="m13.44 29.835l5.657-5.657l4.388 4.377L34 18"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to="0" />
              </path>
              <path
                strokeLinecap="round"
                strokeDasharray="16"
                strokeDashoffset="16"
                d="M26 18h8v8"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" to="0" />
              </path>
            </g>
          </svg>
        </div>
      </div>

      {/* Completed Task */}
      <div className="py-5 px-5 border bg-white border-gray-400 rounded-xl flex justify-between items-center min-w-0">
        <div>
          <h2 className="text-3xl font-bold">{empData.taskNumber.completed}</h2>
          <h3 className="text-xl font-semibold">Completed Task</h3>
        </div>
        <div className="shrink-0 flex items-center justify-center bg-green-100 rounded-xl w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="3 3 18 18">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="#18812f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
              <path
                strokeDasharray="66"
                d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" />
              </path>
              <path strokeDasharray="14" strokeDashoffset="14" d="M8 12l3 3l5 -5">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" to="0" />
              </path>
            </g>
          </svg>
        </div>
      </div>

      {/* Failed Task */}
      <div className="py-5 px-5 border bg-white border-gray-400 rounded-xl flex justify-between items-center min-w-0">
        <div>
          <h2 className="text-3xl font-bold">{empData.taskNumber.failed}</h2>
          <h3 className="text-xl font-semibold">Failed Task</h3>
        </div>
        <div className="shrink-0 flex items-center justify-center bg-red-100 rounded-xl w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="3 3 18 18">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="#fc0303" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
              <path strokeDasharray="60" d="M12 3l9 17h-18l9 -17Z">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="60;0" />
              </path>
              <path strokeDasharray="6" strokeDashoffset="6" d="M12 10v4">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" />
              </path>
              <path strokeDasharray="4" strokeDashoffset="4" d="M12 17v0.01">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumber;