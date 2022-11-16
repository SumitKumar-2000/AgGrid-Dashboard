import React, { useState } from 'react'
import ColumnChart from '../../components/ColumnChart'
import SparkLineChart from '../../components/SparkLineChart'
import { ChartDisplayStyled } from '../../components/StyledComponents/ChartDisplay.styled'
import TimeSeriesChart from '../../components/TimeSeriesChart'
import useFilteredBookingStore from '../../utils/HotelBookingsStore'

const ChartDisplay = () => {
  
  // zustand config
  const setBookingDates = useFilteredBookingStore((state) => state.setBookingDates)
  
  const[startDate,setStartDate] = useState("2015-07-01")
  const[endDate,setEndDate] = useState("2015-08-09")
  
  const handleDateChange = () => {
    // adding content to zustand store
    
    setBookingDates({
      startDate,
      endDate,
    })
  }
  
  return (
    <ChartDisplayStyled>
      <header > 
        <div>Dashboard</div>
        <p>Welcome to your CMS</p>
      </header>

      {/* filter by date component */}
      <section>
          <span>start: <input value={startDate} type='date' onChange={e=>setStartDate(e.target.value)} /></span>
          <span>end: <input value={endDate} type='date' name='endDate' onChange={e=>setEndDate(e.target.value)} /></span>
          <button onClick={handleDateChange}>Set</button>
      </section>

      {/* charts */}
      <SparkLineChart  /> 
      <TimeSeriesChart />
      <ColumnChart/>

    </ChartDisplayStyled>
  )
}

export default ChartDisplay