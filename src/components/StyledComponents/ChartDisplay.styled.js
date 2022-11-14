import styled from "styled-components";

export const ChartDisplayStyled = styled.div`
    header{

        div{
            font-size: 2.3em;
            font-weight: bold;
        }
        p{
            margin: 0 0;
            color: ${({theme})=> theme.colors.green};
            font-size: 1.2em;
            padding-left: 4px;
        }
    }

    section{

        margin-bottom: 1rem;

        div{
            display: flex;
            justify-content: end;
            gap: 1rem;
        }
    }

`