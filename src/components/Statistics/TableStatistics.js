import React from 'react';
import { default as BasicSelect } from "./Select";
import { SelectsContainer, TableContainer } from "./Statistics.styles";
import { TableTransactions } from './TableTransactions';
import { TransictionsList } from './TransictionsList';


import axios from 'axios';
import { useSelector } from 'react-redux';


const TableStatistics = () => {

    return (
        <TableContainer>
            <SelectsContainer>
                <BasicSelect selectName="Month" />
                <BasicSelect selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
            <TransictionsList />
        </TableContainer>
    )
}

export default TableStatistics;



