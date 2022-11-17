import React from 'react'
import Chart from 'react-apexcharts'
import { ColumnChartContainer } from './StyledComponents/ColumnChart.styled'
import useFilteredBookingStore from '../utils/HotelBookingsStore'
import HotelBookings from '../data/hotel_bookings'

const ColumnChart = () => {

  // zustand config, fetching filtered bookings on the basis of start and end date
  const {startDate,endDate} = useFilteredBookingStore((state)=> state.BookingDates) 
  
    const countryvisited = []
    const visitorsPerCountry = []
  
    // countries visited
    const set = new Set();
    HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate).map(item => set.add(item.country))

    for(const item of set){
      countryvisited.push(item)
    }
  
    // visitors count per country
    for(const element of countryvisited){
      const ans = HotelBookings.filter(item => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` >= startDate  && `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` <= endDate && item.country === element)
      .reduce((sum,curr) => {
        return sum + curr.adults + curr.children + curr.babies
      },0)
      visitorsPerCountry.push(ans)
    }

  return (
    <ColumnChartContainer>
       <Chart
        type='bar'
        series={[{
          name : "Visitors per country",
          data : [...visitorsPerCountry]
        }]}
        options={{
          chart : {
            id : "visitors per country"
          },
          xaxis : {
            categories : [...countryvisited],
            title : {
              text : "Countries",
              position : "bottom"
            }
          },
          yaxis : {
            title : {
              text : "Visitors_Count"
            }
          },
          colors : ["#34A0A4"],
          title :{
            text : `VISITORS PER COUNTRY [${startDate} to ${endDate}]`,
            style : {
              fontSize : "20"
            }
          },
          plotOptions : {
            bar : {
              horizontal : false,
              dataLabels : {
                position : "top"
              }
            }
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              colors: ["#333333"]
            }
          },
        }}
        height={205}
       />
    </ColumnChartContainer>
  )
}

export default ColumnChart