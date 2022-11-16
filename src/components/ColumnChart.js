import React, { useState } from 'react'
import HotelBookings from '../data/hotel_bookings'
import Chart from 'react-apexcharts'
import { ColumnChartContainer } from './StyledComponents/ColumnChart.styled'

const ColumnChart = () => {

  const countryvisited = []
  const visitorsPerCountry = []
  // countries visited
  const set = new Set();
  HotelBookings.map(item => set.add(item.country))
  for(const item of set){
    countryvisited.push(item)
  }

  // visitors count per country
  for(const element of countryvisited){
    const ans = HotelBookings.filter(item => item.country === element)
    .reduce((sum,curr) => {
      return sum + curr.adults + curr.children + curr.babies
    },0)
    visitorsPerCountry.push(ans)
  }

  // chart config
  const [columnChartData,setColumnChartData] = useState([{
    name : "Visitors per country",
    data : [...visitorsPerCountry]
  }])
  const [columnChartOptions,setColumnChartOptions] = useState({
    chart : {
      id : "visitors per country"
    },
    xaxis : {
      categories : [...countryvisited],
    },
    yaxis : {
      title : {
        text : "Visitors_Count"
      }
    },
    colors : ["#34A0A4"],
    title :{
      text : "VISITORS PER COUNTRY",
      style : {
        fontSize : "20"
      }
    },
  })

  return (
    <ColumnChartContainer>
       <Chart
        type='bar'
        series={columnChartData}
        options={columnChartOptions}
        height={205}
       />
    </ColumnChartContainer>
  )
}

export default ColumnChart