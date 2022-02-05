import React, { useState, useEffect } from 'react';
import { default as BasicSelect } from "./Select.js";
import { SelectsContainer, TableContainer } from "./TableStatistic.style.js";
import { TableTransactions } from './TableTransactions.js';
import { TransictionsList } from './TransictionsList.js';
import axios from 'axios';


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
    let [options, setOptions] = useState({ years: [], months: [] })


    const baseURL = `https://wallet.goit.ua/api/transactions-summary`;

    const fetchData = async (params) => {
        // console.log(params);
        axios.get(baseURL, { params }).then((response) => {
            setFetcher(response.data);
        })
    };

    const setYearOnClick = (value) => {
        setYear(value);
    }

    const setMonthOnClick = (value) => {
        setMonth(value);
    }

    // https://wallet.goit.ua/api/transactions

    const parseDate = (type, arr) =>
        arr.map(elem => type === "month"
            ? (new Date(elem.transactionDate)).getUTCMonth() + 1
            : (new Date(elem.transactionDate)).getFullYear()
        ).reduce((acc, elem) => {
            if (!acc.includes(elem)) {
                acc.push(elem);
            }
            return acc;
        }, [])
            .sort((a, b) => a - b);


    const parseOptions = (arr) => {
        const years = parseDate("year", arr);
        const months = parseDate("month", arr);

        setOptions({ years, months, });
    }


    useEffect(() => {
        let obj = updateUrl(year, month);
        fetchData(obj);


    }, [year, month]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://wallet.goit.ua/api/transactions")
                .then(response => parseOptions(response.data))
        }
        fetchData();

    }, []);

    console.log(fetcher);

    return (
        <TableContainer>
            <SelectsContainer>
                <BasicSelect func={setMonthOnClick} options={options.months} selectName="Month" />
                <BasicSelect func={setYearOnClick} options={options.years} selectName="Year" />
            </SelectsContainer>
            <TableTransactions />
            <TransictionsList categoriesSummary={fetcher.categoriesSummary} transactionObj={fetcher} />
        </TableContainer>
    )
}

export default TableStatistics;



