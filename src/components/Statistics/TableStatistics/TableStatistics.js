import React from 'react';
import { default as BasicSelect } from "./Select.js";
import { SelectsContainer, TableContainer } from "./TableStatistic.style.js";
import { TableTransactions } from './TableTransactions.js';
import { TransictionsList } from './TransictionsList.js';


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const monthsObj = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12,
}

const TableStatistics = (props) => {

    return (
        <TableContainer>
            <SelectsContainer>
                <BasicSelect
                    func={props.setMonthOnClick}
                    options={months}
                    selectName="Month" />
                <BasicSelect
                    func={props.setYearOnClick}
                    options={props.options.years}
                    selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
            <TransictionsList
                categoriesSummary={props.fetcher.categoriesSummary}
                transactionObj={props.fetcher}
                squareColors={props.squareColors}
            />
        </TableContainer>
    )
}

export default TableStatistics;



