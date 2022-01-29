import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const svgArrow = styled(KeyboardArrowDownIcon)`
    fill: black;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export const SelectFilter = styled(Select)`
    width:166px;
    border-radius: 30px;
    
    fieldset{
        padding: 12px 20px 18px;
        border-color: #000000;
        
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
        padding: 12px 20px 18px;
    }

    .selectName{
        font-family:"Abel", sans-serif;
        color: #000;
        font-weight: 400;
        font-size: 16px;
        line-height:20px;
    }
`

export const SelectsContainer = styled.div`
    display: flex;
    gap: 19px;
`
export const TableContainer = styled.div`
    max-width: 350px;
`
export const DefinitionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 30px 19px;
    margin-top: 20px;
    border-radius: 30px;
    background-color: #f4f4f4;

    p{
        margin: 0;
        text-transform: uppercase;
    }
`