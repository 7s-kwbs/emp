import React from 'react'
import { useAuth } from '../../context/AuthProvider'

export const Deadlines = () => {
    const today = new Date();
    const {empData} =useAuth();
    const upcomingDeadlines = empData.tasks.filter((task)=>!task.completed && new Date(task.deadline) >= today).sort((a, b)=> new Date(a.deadline)- new Date(b.deadline)) || [];
  return (
    <div className="bg-white h-75 rounded-lg p-5 w-full">
        <h1 className='text-xl font-semibold mb-5'>Upcomming Deadlines</h1>
        {upcomingDeadlines.length >0 ?
        upcomingDeadlines.map((task, index)=>{
            const date = new Date(task.deadline);
            const day = date.getDate();
            const month = date.toLocaleDateString("default", {month: "short"});
           return <div key={index} className='flex gap-3 items-center shadow p-2'>
            <div className=' p-0.5 w-10 h-10 flex-wrap leading-none bg-blue-50 rounded-xl flex flex-col justify-center items-center shadow border border-gray-200 font-semibold '>
                {day} <span className=' text-gray-500 text-[10px]' > {month}</span>
            </div>
            <div>
                <h1 className='font-semibold text-gray-700'>{task.taskTitle}</h1>
                <p className={`flex justify-center items-center  rounded-xl  text-[12px]  font-semibold w-min px-2
                 ${task.priority == 'high'? "bg-red-100 text-red-700":
                    task.priority =='medium'? "bg-orange-100 text-orange-700":
                    "bg-green-100 text-green-700"
                 }`}>{task.priority}</p>
            </div>
        </div>
        })
        : (<p className='flex items-center justify-center h-full'> No Upcomming Deadlines</p>) }
    </div>
  )
}
