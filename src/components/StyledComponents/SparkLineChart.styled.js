import styled from "styled-components";

export const SparkLineChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;

    .visitorContainer{
        border-radius: 2px;
        background-color: #ffffff;
        box-shadow: rgb(0 0 0 / 10%) 0px 12px 12px -10px;
        width: 33%;
        display: flex;
        align-items: center;

        .visitorDetails{
            display: flex;
            flex-direction: column;
            padding: 3rem 1rem;

            .firstChild{
                font-size: 1.2em;
                font-weight: bold;
                color: ${({theme})=> theme.colors.green};
            }
            .secondChild{
                font-size: 13px
            }
        }

        .visitorPlot{
            width: 75%;
            padding: 0.5em; 
        }
    }
`