import styled from '@emotion/styled';
import { breakpoint } from "../GlobalStyles";




export const StatisticsContainer = styled.div`
display: flex;
gap:30px;
margin-top:20px;
@media screen and (max-width: ${breakpoint.tablet}){
    justify-content:center;
}
@media screen and (max-width: ${breakpoint.mobile}){
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
`









