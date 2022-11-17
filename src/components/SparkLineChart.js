import React from 'react'
import { SparkLineChartContainer } from './StyledComponents/SparkLineChart.styled'

// chart js 
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title
)
//

const SparkLineChart = () => {
    
  const chartData = [
    {
        id: 1,
        visitors_type: "Total Visitors",
        visitors_count: 2229,
        Bookings : {
            labels : [
                 "July 1","July 2","July 3","July 4","July 5","July 6","July 7","July 8","July 9","July 10","July 11","July 12","July 13","July 14","July 15","July 16","July 17","July 18","July 19","July 20","July 21","July 22","July 23","July 24","July 25","July 26","July 27","July 28","July 29","July 30","July 31","August 1","August 2","August 3","August 4","August 5","August 6","August 7","August 8","August 9"    
            ],
            datasets: [{
                 data : [63, 72, 77, 72, 63, 73, 38, 42, 45, 75, 58, 102, 83, 45, 55, 54, 106, 71, 63, 78, 29, 17, 34, 70, 91, 35, 82, 32, 43, 43, 58, 70, 26, 26, 28, 31, 30, 53, 64, 32],
                 backgroundColor : "#333333",
                 borderColor : "#34A0A4",
                 pointBorderColor : "transparent",
                 pointBorderWidth: 2,  
            }]
       }
    },
    {
        id: 2,
        visitors_type: "Adult Visitors",
        visitors_count: 1992,
        Bookings : {
            labels : [
                 "July 1","July 2","July 3","July 4","July 5","July 6","July 7","July 8","July 9","July 10","July 11","July 12","July 13","July 14","July 15","July 16","July 17","July 18","July 19","July 20","July 21","July 22","July 23","July 24","July 25","July 26","July 27","July 28","July 29","July 30","July 31","August 1","August 2","August 3","August 4","August 5","August 6","August 7","August 8","August 9"    
            ],
            datasets: [{
                 data : [62, 68, 73, 63, 56, 65, 35, 41, 36, 64, 54, 79, 81, 42, 51, 47, 97, 58, 55, 64, 26, 14, 30, 66, 84, 31, 76, 28, 41, 39, 52, 56, 25, 21, 27, 30, 27, 44, 55, 29],
                 backgroundColor : "#333333",
                 borderColor : "#34A0A4",
                 pointBorderColor : "transparent",
                 pointBorderWidth: 2,
            }]
       }
       
    },
    {
        id: 3,
        visitors_type: "Children Visitors",
        visitors_count: 213,
        Bookings : {
            labels : [
                 "July 1","July 2","July 3","July 4","July 5","July 6","July 7","July 8","July 9","July 10","July 11","July 12","July 13","July 14","July 15","July 16","July 17","July 18","July 19","July 20","July 21","July 22","July 23","July 24","July 25","July 26","July 27","July 28","July 29","July 30","July 31","August 1","August 2","August 3","August 4","August 5","August 6","August 7","August 8","August 9"    
            ],
            datasets: [{
                 data : [1, 4, 4, 7, 7, 7, 3, 1, 8, 7, 3, 20, 1, 3, 4, 7, 9, 11, 7, 12, 3, 3, 4, 4, 7, 4, 6, 4, 2, 4, 6, 14, 1, 4, 0, 0, 3, 8, 8, 2],
                 backgroundColor : "#333333",
                 borderColor : "#34A0A4",
                 pointBorderColor : "transparent",
                 pointBorderWidth: 2,
            }],
            
       }
       
    }
  ]
  
  // chart config
  const options = {
    plugins: {
        legend: false,
    },
    scales : {
        x : {
            grid : {
                display : false,
            },
        },
        y : {    
            grid : {
                borderDash : [10],
            },
            ticks : {       
                display : false
            }
        }
    },
  }

  return (
    <SparkLineChartContainer>
        {chartData.map(item => {
            return <div key={item.id} className='visitorContainer'>
                <div className='visitorDetails'>
                    <div className='firstChild'>{item.visitors_count}</div>
                    <div className='secondChild'>{item.visitors_type}</div>
                </div>
                <div className='visitorPlot'>
                    <Line data={item.Bookings} options={options} />
                </div>
            </div>
        })}
    </SparkLineChartContainer>
  )
}

export default SparkLineChart