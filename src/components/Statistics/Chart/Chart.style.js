import styled from '@emotion/styled';
import { breakpoint } from "../../GlobalStyles"

export const ChartContainer = styled.div`
    width:320px;
    height:320px;
    position: relative;
    @media screen and (max-width:${breakpoint.mobile}){
        width:280px;
        height:280px;
    }

`

export const TotalBalance = styled.p`
    font-family:"Abel",sans-serif;
    font-weight:400;
    font-size:18px;
    line-height:23px;
    position: absolute; 
    z-index: 10; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%,-50%);
    width: 75%;
    height: 75%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`