import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';


import { default as Chart } from "./Chart/Chart";
import { default as TableStatistics } from "./TableStatistics/TableStatistics";
import { StatisticsContainer } from "./Statistics.styles";
import numberFormater from "../../logic/numberFormater";
import { parseUniqueDate as parseDate } from "../../logic/parseUniqueDate";
import colorsArr from "./staticObj/colorsArr";
import updateUrl from "../../logic/updateUrl";
import { monthsObj } from "./staticObj/montObject";
import { getTransactionsSummary } from "../../redux/transactionsSummary/transactionsSummaryAPI";


const Statistics = (props) => {
    const dispatch = useDispatch();
    let [month, setMonth] = useState(null);
    let [year, setYear] = useState(null);
    let [options, setOptions] = useState({ years: [] });
    let fetcher = useSelector(state => state.summary.transactions) || {};

    const summaryTransactionsURL = `https://wallet.goit.ua/api/transactions`;

    const fetchData = async (params) => {
        dispatch(getTransactionsSummary({ params }));
    };

    const setYearOnClick = (value) => {
        setYear(value);
    }

    const setMonthOnClick = (value) => {
        setMonth(monthsObj[value]);
    }

    const handleOptions = (arr) => {
        const years = parseDate("year", arr)
        setOptions({ years });
    }

    useEffect(() => {
        const fetchTransactions = async () => {
            let obj = updateUrl(year, month);
            await fetchData(obj);
        }
        fetchTransactions();
    }, [year, month, dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(summaryTransactionsURL)
                .then(response => handleOptions(response.data))
        }
        fetchData();
    }, []);

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