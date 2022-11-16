import React, { useState } from 'react'
import ColumnChart from '../../components/ColumnChart'
import SparkLineChart from '../../components/SparkLineChart'
import { ChartDisplayStyled } from '../../components/StyledComponents/ChartDisplay.styled'
import TimeSeriesChart from '../../components/TimeSeriesChart'

const ChartDisplay = () => {

  // date  
  const dates = {
    days : ["select date",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    months : ["select month","January","February","March","April","May","June","July","August","September","October","November","December"]
  }

  const [bookingDates,setBookingDates] = useState({})
  const handleDateChange = (e) => {
    setBookingDates({...bookingDates, [e.target.name] : e.target.value})
  }

  const startDate = `${bookingDates.startDay} ${bookingDates.startMonth}`
  const endDate = `${bookingDates.endDay} ${bookingDates.endMonth}`

  console.log(startDate," ",endDate);

  return (
    <ChartDisplayStyled>
      <header > 
        <div>Dashboard</div>
        <p>Welcome to your CMS</p>
      </header>

      {/* filter by date component */}
      <section>
        <div>

         <span>start date:&nbsp;  
          <select onChange={handleDateChange} name="startDay" id="startDay">
            {
              dates.days.map(item => (
                <option id={item}>{item}</option>
              ))
            }
          </select>
          <select onChange={handleDateChange} name='startMonth' id='startMonth' >
            {
              dates.months.map(item => (
                <option id={item}>{item}</option>
              ))
            }
          </select>
         </span> 
         <span>end date: &nbsp;
         <select onChange={handleDateChange} name="endDay" id="endDay">
            {
              dates.days.map(item => (
                <option id={item}>{item}</option>
              ))
            }
          </select>
          <select onChange={handleDateChange} name='endMonth' id='endMonth' >
            {
              dates.months.map(item => (
                <option id={item}>{item}</option>
              ))
            }
          </select>
         </span> 
         
         <button>Reset</button>
        </div>
      </section>

      {/* charts */}
      <SparkLineChart  /> 
      <TimeSeriesChart />
      <ColumnChart/>

    </ChartDisplayStyled>
  )
}

export default ChartDisplay