import React from 'react'
import { Pie } from "react-chartjs-2";
import{Chart as ChartJS, Tooltip, Legend, ArcElement} from 'chart.js'
ChartJS.register(Tooltip,Legend, ArcElement)

export const PieChart = () => {
    const options={}
    const PieChartData ={
        labels:["High", "Medium", "Low"],
        datasets:[
            {
                label:"task",
                data:[5, 3, 10],
                backgroundColor: ["#F56464", "#64A5F5", "#65E069"],
                hoverOffset:4,
            }
        ]
    }
  return (
    <div className=' h-75'>
        <Pie options={options} data={PieChartData} />
    </div>
  )
}
