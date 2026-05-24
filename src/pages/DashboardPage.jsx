import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import Card from '../components/Card'
import BarChart from '../components/charts/BarChart'
import { PieChart } from '../components/charts/PieChart'

const DashboardPage = () => {
    const cards = [
        {
            title: "Total Tasks Assigned",
            total: 148,
            icon: "",
            
        }
    ]
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
            <Card />
        </div>
        {/* Graph section */}
        <div className='flex flex-col md:flex-row'>
            <div className='h-96 lg:h-125 w-full xl:w-2/3'>
            <BarChart />
            </div>
            <div className='h-75 w-full xl:w-1/3 '>
                <PieChart />
            </div>
        </div>
        {/* Recent Activities */}
        <div>

        </div>
    </div>
  )
}

export default DashboardPage