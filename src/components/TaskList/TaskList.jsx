import React from "react";
import NewTask from "./NewTask";
import { useAuth } from "../../context/AuthProvider";

const TaskList = () => {
  const {empData} = useAuth();
  return (
    <div
      className="tasklist flex flex-col h-155 w-full my-10 gap-5 bg-white p-5 rounded-xl overflow-auto"
    >
      <h2 className="text-xl font-bold pl-1">My Task</h2>
      {empData.tasks.map((task, index)=>{
        if(task ){
          return <NewTask key={index} task ={ task} />
        }
      })}
    </div>

    
  );
};

export default TaskList;
