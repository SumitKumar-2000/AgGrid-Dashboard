import React  from 'react'
import { TimeSeriesChartContainer } from './StyledComponents/TimeSeriesChart.styled'
import useFilteredBookingStore from '../utils/HotelBookingsStore'
import HotelBookings from '../data/hotel_bookings'

// charts
import Chart from 'react-apexcharts'

const TimeSeriesChart = () => {

  // zustand config, fetching filtered bookings on the basis of start and end date
  const {startDate,endDate} = useFilteredBookingStore((state)=> state.BookingDates)

  const visitorData = {
    dates : [],
    totalVisitors : [],
    adults : [],
    children : [],
    babies : [],
  }

  const set = new Set();
  HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate).map(item => set.add(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`))

  for(const element of set){
    visitorData.dates.push(element)
  }

  // total visitors calculation
  for(const element of visitorData.dates){
    const visitorsPerDate = HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` === element).reduce((total,curr)=>{
      return total + curr.adults + curr.children + curr.babies
    },0)
    visitorData.totalVisitors.push(visitorsPerDate)
  }

  // adultvisitors calculation
  const adultCount = HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate).reduce((total,curr)=>{
    return total + curr.adults
  },0) 
  visitorData.adults.push(adultCount)
  
  // childrenvisitors calculation
  const childrenCount = HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate).reduce((total,curr)=>{
    return total + curr.children
  },0) 
  visitorData.children.push(childrenCount)
  
  // babyvisitors calculation
  const babiesCount = HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate).reduce((total,curr)=>{
    return total + curr.babies
  },0) 
  visitorData.babies.push(babiesCount)


  return (
    <TimeSeriesChartContainer>
        <div className='linePlot'>
          <Chart
            type='line'
            series={[{
              name : "Visitors per day",
              data : [...visitorData.totalVisitors]
            }]}
            options={{
              chart : {
                id : "visitors per day"
              },
              xaxis : {
                categories : [...visitorData.dates],
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
            }}
            height={300}
          />
        </div>
        <div className='doughnutPlot'>
          <Chart type='donut' 
              series={[...visitorData.adults, ...visitorData.children, ...visitorData.babies]} 
              options={{
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