import React from 'react'

const Notification = () => {
  return (
    <div className="bg-white h-75 rounded-lg p-5 w-full">
        <h1 className='text-xl font-semibold mb-5'>Recent Notification</h1>
        <div className='w-full border-gray-50 px-5 py-1 rounded-lg shadow-sm'>
            <p className='font-medium text-gray-700'>Task type : <span>task title</span></p>
            <p className='pl-1 text-gray-400 text-[14px]  '>Time</p>
        </div>
    </div>
  )
}

export default Notification