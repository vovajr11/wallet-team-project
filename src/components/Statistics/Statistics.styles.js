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
    background-color: #fff;

    p{
        margin: 0;
        font-size: 18px;
        line-height: 23px;
        font-weight:400; 
    }
`
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
    padding:15px 20px;
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