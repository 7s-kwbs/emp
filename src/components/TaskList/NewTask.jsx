import React from 'react'

const NewTask = ({task}) => {
  return (
          <div className={`shrink-0 h-full w-75 p-5 rounded-xl
          ${task.newTask ? "bg-blue-400":
            task.active ? "bg-yellow-400":
            task.completed ? "bg-green-400":
            "bg-red-400"
          }
          `}>

        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{task.category}</h3>
          <h4 className="text-sm">{task.taskDate}</h4>
        </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
        <p className="text-sm mt-2">{task.taskDescription}</p>
        {task.newTask?<button className='bg-blue-700 mt-4 py-1 px-2 text-sm rounded-lg active:scale-95'>Accept Task</button>:
        task.completed ? <button className='bg-green-700 mt-4 py-1 px-2 text-sm rounded-lg active:scale-95'>Complete</button>:
        task.active ? <div className='flex justify-between mt-4'>
            <button className='bg-green-700 py-1 px-2 text-sm rounded-lg active:scale-95'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded-lg active:scale-95'>Mark as Failed</button>
        </div>:
         <button className='bg-red-700 mt-4 py-1 px-2 text-sm rounded-lg active:scale-95'>Failed</button>
        
        }
      </div>
  )
}

export default NewTask