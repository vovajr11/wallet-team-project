import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import { default as BasicSelect } from "./Select.js";
import { SelectsContainer, TableContainer } from "./TableStatistic.style.js";
import { TableTransactions } from './TableTransactions.js';
import { TransictionsList } from './TransictionsList.js';


import axios from 'axios';
import { useSelector } from 'react-redux';

const updateUrl = (year, month) => {
    if (year && month) {
        return {
            "year": year,
            "month": month,
        }
    }
    else if (year) {
        return {
            "year": year,
        }
    }
}

const TableStatistics = () => {
    // https://wallet.goit.ua/api/transactions-summary?month=2&year=2

    let yearNow = (new Date()).getFullYear();

    let [month, setMonth] = useState(null);
    let [year, setYear] = useState(yearNow);
    let [fetcher, setFetcher] = useState([]);


    const baseURL = `https://wallet.goit.ua/api/transactions-summary`;

    const fetchData = async (params) => {
        console.log(params);
        axios.get(baseURL, { params }).then((response) => {
            setFetcher(response.data);
        })
    };


    useEffect(() => {
        let obj = updateUrl(year, month);
        fetchData(obj);
        console.log('fetch= ', fetcher)
    }, [year, month]);

    const setYearOnClick = (value) => {
        setYear(value);
    }

    const setMonthOnClick = (value) => {
        setMonth(value);
    }

    return (
        <TableContainer>
            {console.log(year)}
            <SelectsContainer>
                <BasicSelect func={setMonthOnClick} selectName="Month" />
                <BasicSelect func={setYearOnClick} selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
            <TransictionsList categoriesSummary={fetcher.categoriesSummary} />
        </TableContainer>
    )
}

export default TableStatistics;



