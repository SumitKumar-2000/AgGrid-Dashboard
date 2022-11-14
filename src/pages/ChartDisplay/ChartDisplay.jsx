import React from 'react'
import SparkLineChart from '../../components/SparkLineChart'
import { ChartDisplayStyled } from '../../components/StyledComponents/ChartDisplay.styled'

const ChartDisplay = () => {

  return (
    <ChartDisplayStyled>
      <header > 
        <div>Dashboard</div>
        <p>Welcome to your CMS</p>
      </header>

      {/* filter by date component */}
      <section>
        <div>
         <span>Start: <input type='date'/></span> <span>End: <input type='date'/></span> 
        </div>
      </section>

      {/* charts */}
      <SparkLineChart  /> 

    </ChartDisplayStyled>
  )
}

export default ChartDisplay