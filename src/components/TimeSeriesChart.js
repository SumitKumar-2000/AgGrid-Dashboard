import React, { useState } from 'react'
import { TimeSeriesChartContainer } from './StyledComponents/TimeSeriesChart.styled'

// charts
import Chart from 'react-apexcharts'

const TimeSeriesChart = () => {

  const [lineSeriesChartData,setlineSeriesChartData] = useState([{
    name : "Visitors per day",
    data : [63, 72, 77, 72, 63, 73, 38, 42, 45, 75, 58, 102, 83, 45, 55, 54, 106, 71, 63, 78, 29, 17, 34, 70, 91, 35, 82, 32, 43, 43, 58, 70, 26, 26, 28, 31, 30, 53, 64, 32]
  }])
  const [lineChartOptions,setLineChartOptions] = useState({
    chart : {
      id : "visitors per day"
    },
    xaxis : {
      categories : ["July 1","July 2","July 3","July 4","July 5","July 6","July 7","July 8","July 9","July 10","July 11","July 12","July 13","July 14","July 15","July 16","July 17","July 18","July 19","July 20","July 21","July 22","July 23","July 24","July 25","July 26","July 27","July 28","July 29","July 30","July 31","August 1","August 2","August 3","August 4","August 5","August 6","August 7","August 8","August 9"],
    },
    yaxis : {
      title : {
        text : "Visitors_Count"
      }
    },
    colors : ["#34A0A4"],
    title :{
      text : "VISITORS PER DAY",
      style : {
        fontSize : "20"
      }
    }
  })
  const [piSeriesChartData,setPiSeriesChartData] = useState([
    1990,213,24
  ])

  return (
    <TimeSeriesChartContainer>
        <div className='linePlot'>
          <Chart
            type='line'
            series={lineSeriesChartData}
            options={lineChartOptions}
            height={300}
          />
        </div>
        <div className='doughnutPlot'>
          <Chart type='donut' series={piSeriesChartData} options={{
              chart: {
                type: 'donut',
              },
              legend: {
                position: 'bottom'
              },
              labels : ['Adults','Children','Babies'],
              colors : ["#168aad  ","#52b69a","#76a893"],
            }} height={300}/>
        </div>
    </TimeSeriesChartContainer>
  )
}

export default TimeSeriesChart