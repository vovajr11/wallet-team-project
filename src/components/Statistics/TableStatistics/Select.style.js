import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { breakpoint } from "../../GlobalStyles"
export const SelectFilter = styled(Select)`
    width:166px;
    border-radius: 30px;
    font-family:"Abel", sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 16px;
    line-height:20px;
    
    fieldset{
        padding: 12px 20px 18px;
        border-color: #000000;
        
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
        padding: 12px 20px 18px;
    }

    @media screen and (max-width: ${breakpoint.tablet}){
        width:100%;
    }
`

export const svgArrow = styled(KeyboardArrowDownIcon)`
    fill: black;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export const Option = styled(MenuItem)`
font-family: "Abel",sans-serif;
    span{
    }
`