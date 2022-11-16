import styled from "styled-components";

export const TimeSeriesChartContainer = styled.div`
    padding: 1em;
    display: flex;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 10%) 0px 12px 12px -10px;
    margin-bottom: 1em;

    .linePlot{
        width: 80%;
    }
    .doughnutPlot{
        width: 20%;
    }
`