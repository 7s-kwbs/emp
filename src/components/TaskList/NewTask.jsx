import React from 'react'
import ProgressBar from "../others/ProgressBar";

const NewTask = ({task}) => {
  return (
    <div className=' w-full bg-white p-5 shrink-0 rounded-lg shadow-sm border border-gray-400'>
      <div className='flex gap-2'>
      <h1 className='text-lg font-sans font-bold'>{task.taskTitle}</h1>
      <p className={`px-2  rounded-xl  my-1 font-semibold  text-[12px] ${task.priority === "high"?"bg-red-100 text-red-500 ": task.priority == 'medium' ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"} `}>{task.priority}</p>
      </div>
      <p className=' text-gray-400 text-sm '>{task.taskDescription}</p>
      <div className='flex gap-2 text-gray-400 text-sm'>
        <p>Assigned by {task.assignedBy}</p>
        <p>{task.taskDate} </p>
      </div>
      <ProgressBar value={task.progress} />
    </div>
  )
}

export default NewTask