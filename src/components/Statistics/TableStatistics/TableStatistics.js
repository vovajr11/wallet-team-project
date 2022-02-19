import React from 'react';
import { default as BasicSelect } from "./Select.js";
import { SelectsContainer, TableContainer } from "./TableStatistic.style.js";
import { TableTransactions } from './TableTransactions.js';
import { TransictionsList } from './TransictionsList.js';
import { monthsArr as months } from '../staticObj/montObject.js';

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



