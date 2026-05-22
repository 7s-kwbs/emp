import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'

const DashboardPage = () => {
  return (
    <div className='p-5'>
        {/* title section */}
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold text-gray-800'>Manager Dashboard</h1>
                <p className='text-sm text-gray-600 '>Overview of your team's task</p>
            </div>
            <div>
                <PrimaryButton icon={"+"} value={"Assign Task"} />
            </div>
        </div>
        {/* card section */}
        <div>

        </div>
        {/* Graph section */}
        <div>
  
        </div>
        {/* Recent Activities */}
        <div>

        </div>
    </div>
  )
}

export default DashboardPage