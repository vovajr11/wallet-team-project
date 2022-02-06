import React, { useState, useEffect } from "react";
import axios from "axios";
import { default as Chart } from "./Chart/Chart";
import { default as TableStatistics } from "./TableStatistics/TableStatistics";


const Statistics = (props) => {

    let yearNow = (new Date()).getFullYear();

    let [month, setMonth] = useState(null);
    let [year, setYear] = useState(yearNow);
    let [fetcher, setFetcher] = useState([]);
    let [options, setOptions] = useState({ years: [], months: [] });

    const transactionsForPeriod = `https://wallet.goit.ua/api/transactions-summary`;
    const summaryTransactionsURL = `https://wallet.goit.ua/api/transactions`;

    const fetchData = async (params) => {
        axios.get(transactionsForPeriod, { params }).then((response) => {
            setFetcher(response.data);
        })
    };


    const setYearOnClick = (value) => {
        setYear(value);
    }

    const setMonthOnClick = (value) => {
        setMonth(value);
    }

    const parseDate = (type, arr) =>
        arr.map(elem => type === "month"
            ? (new Date(elem.transactionDate)).getUTCMonth() + 1
            : (new Date(elem.transactionDate)).getFullYear()
        )
            .reduce((acc, elem) => {
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
        const fetchTransactions = async () => {
            let obj = await updateUrl(year, month);
            fetchData(obj);
        }
        fetchTransactions();
    }, [year, month]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(summaryTransactionsURL)
                .then(response => parseOptions(response.data))
        }
        fetchData();
        console.log(options);
    }, []);


    return (
        <section>
            <h2>
                Statistics
            </h2>
            <>
                <Chart />
                <TableStatistics
                    setMonthOnClick={setMonthOnClick}
                    setYearOnClick={setYearOnClick}
                    options={options}
                    fetcher={fetcher}
                />
            </>
        </section>
    )
}

export default Statistics;

async function updateUrl(year, month) {
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