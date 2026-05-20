import React from "react";
import NewTask from "./NewTask";
import { useAuth } from "../../context/AuthProvider";

const TaskList = () => {
  const {empData} = useAuth();
  return (
    <div
      id="tasklist"
      className="flex  items-center justify-start gap-5 flex-nowrap h-[55%] w-full  mt-10 py-5 overflow-x-auto"
    >
      {empData.tasks.map((task, index)=>{
        if(task ){
          return <NewTask key={index} task ={ task} />
        }
      })}
    </div>

    
  );
};

export default TaskList;
