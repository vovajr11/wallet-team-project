import React, { useState, useEffect } from "react";
import axios from "axios";
import { default as Chart } from "./Chart/Chart";
import { default as TableStatistics } from "./TableStatistics/TableStatistics";
import { StatisticsContainer } from "./Statistics.styles";
import numberFormater from "../../logic/numberFormater"

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


const Statistics = (props) => {

    let yearNow = (new Date()).getFullYear();

    let [month, setMonth] = useState(null);
    let [year, setYear] = useState(null);
    let [fetcher, setFetcher] = useState([]);
    let [options, setOptions] = useState({ years: [], months: [] });

    const transactionsForPeriod = `https://wallet.goit.ua/api/transactions-summary`;
    const summaryTransactionsURL = `https://wallet.goit.ua/api/transactions`;

    const fetchData = async (params) => {
        await axios.get(transactionsForPeriod, { params }).then((response) => {
            setFetcher(response.data);
        })
    };


    const setYearOnClick = (value) => {
        setYear(value);
    }

    const setMonthOnClick = (value) => {
        setMonth(monthsObj[value]);
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

    const colorsArr = [
        "#FED057",
        "#FFD8D0",
        "#FD9498",
        "#C5BAFF",
        "#6E78E8",
        "#4A56E2",
        "#81E1FF",
        "#24CCA7",
        "#00AD84",
    ]
    return (
        <section>
            <h2>
                Statistics
            </h2>
            <StatisticsContainer>
                <Chart
                    transactionsArr={fetcher.categoriesSummary ? fetcher.categoriesSummary : []}
                    totalForPeriod={fetcher.periodTotal ? numberFormater(fetcher.periodTotal) : 0}
                    bgColors={colorsArr}
                />
                <TableStatistics
                    setMonthOnClick={setMonthOnClick}
                    setYearOnClick={setYearOnClick}
                    options={options}
                    fetcher={fetcher}
                    squareColors={colorsArr}
                />
            </StatisticsContainer>
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