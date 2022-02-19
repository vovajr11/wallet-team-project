import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import { breakpoint } from '../../GlobalStyles';

export const SelectsContainer = styled.div`
    display: flex;
    @media screen and (max-width:1115px) and (min-width:1025px){
        flex-direction:column
    }
    @media screen and (max-width:${breakpoint.mobile}){
        flex-direction:column;
    }
`

export const TableContainer = styled.div`
    max-width: 350px;
    @media screen and (max-width: ${breakpoint.mobile}){
        max-width:unset;
        width:100%;
    }
`

export const DefinitionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 30px 19px;
    margin-top: 20px;
    border-radius: 30px;
    background-color: #fff;

    p{
        margin: 0;
        font-size: 18px;
        line-height: 23px;
        font-weight:400; 
    }
`