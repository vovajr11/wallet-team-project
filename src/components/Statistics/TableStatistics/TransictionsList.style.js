import styled from '@emotion/styled';
import { breakpoint } from "../../GlobalStyles"

export const ListOfTransitions = styled.ul`
    list-style: none;
    max-height:44vh;
    overflow-y:scroll;

    ::-webkit-scrollbar-track {
        border: 1px solid #f1f1f1;
        padding: 2px 0;
        background-color: #f1f1f1;
    }
    
    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #f1f1f1;
        border: 1px solid #f1f1f1;
        transform: rotate(180deg);
      }

    @media screen and (max-width: ${breakpoint.tablet}){
        max-height:unset;
    }

`

export const ListItem = styled.li`
    font-family: "Abel",sans-serif;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    padding:15px 20px;
    border-bottom: 1px solid #DCDCDF;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    .squareColor{
        width: 26px;
        height: 24px;
        border-radius: 2px;
    }

    .itemInner{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding: 0  11px 0 16px;
        color:#000000;
    }
    `

export const Total = styled.div`
    display:flex;
    justify-content:space-between;
    font-family: "Abel",sans-serif;
    font-size: 16px;
    line-height: 20px;
    padding:15px 37px 15px 20px;
    width:100%;    
    border:none;
    box-shadow:none;

    .expenses{
        color:#FF6596;
    }
    .incomes{
        color:#24CCA7;
    }

`