import styled from '@emotion/styled';

export const ChartContainer = styled.div`
    width:320px;
    height:320px;
    position: relative;
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
    width: 230px;
    height: 230px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`