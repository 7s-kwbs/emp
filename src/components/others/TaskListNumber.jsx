import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex  mt-10 justify-between gap-4 screen flex-wrap sm:flex-nowrap'>
        <div className='  py-5 sm:w-full w-1/4 px-10 bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-bold'>{data.taskNumber.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='  py-5 sm:w-full w-1/4 px-10 bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-bold'>{data.taskNumber.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='  py-5 sm:w-full w-1/4 px-10 bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-bold'>{data.taskNumber.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>
        <div className=' py-5 sm:w-full w-1/4 px-10 bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber