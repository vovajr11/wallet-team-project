import React from 'react';
import { default as BasicSelect } from "./Select.js";
import { SelectsContainer, TableContainer } from "./TableStatistic.style.js";
import { TableTransactions } from './TableTransactions.js';
import { TransictionsList } from './TransictionsList.js';


const TableStatistics = (props) => {

    return (
        <TableContainer>
            <SelectsContainer>
                <BasicSelect
                    func={props.setMonthOnClick}
                    options={props.options.months}
                    selectName="Month" />
                <BasicSelect
                    func={props.setYearOnClick}
                    options={props.options.years}
                    selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
            <TransictionsList
                categoriesSummary={props.fetcher.categoriesSummary}
                transactionObj={props.fetcher} />
        </TableContainer>
    )
}

export default TableStatistics;



