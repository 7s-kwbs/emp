import React from 'react'
import { Bar } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins,
 } from "chart.js";
 
 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
 )

const BarChart = () => {
    const BarchartData = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"],
        datasets:[
            {
                label: "Completed",
                data: [12,15,10,18,14,8,0],
                backgroundColor: [ "#305EFC"],
                borderRadius:4,
            },
            {
                label: "Pending",
                data:[5,8,6,4,7,3,0],
                backgroundColor: [ "#9DDCF5"],
                borderRadius: 4
            }

        ]
    }
    const options ={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                position:'top',
            },
            title:{
                display: true,
                text:" Weekly task Completion"
            }
        }
    }
  return (

        <div  className="relative w-full h-full ">
            <Bar options={options} data={BarchartData} />
        </div>
    );
}

export default BarChart