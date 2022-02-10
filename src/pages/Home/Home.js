import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Home = () => {
    const breakpointMobile = useMediaQuery('(max-width: 767px)');

    const transactionsURL = 'https://wallet.goit.ua/api/';

    const [transactions, setTransactions] = useState([]);

    const getTransactions = async () => {
        const trans = await axios.get(`${transactionsURL}transactions`);
        const categories = await axios.get(
            `${transactionsURL}transaction-categories`,
        );
        transactionHandler(trans.data, categories.data);
    };

    const transactionHandler = async (transactionsArray, categoriesArray) => {
        const data = await transactionsArray.map(item => {
            for (let i = 0; i < categoriesArray.length; i++) {
                if (item.categoryId === categoriesArray[i].id) {
                    let category = { category: categoriesArray[i].name };
                    return Object.assign({}, item, category);
                }
            }
        });
        setTransactions(data);
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            {!breakpointMobile ? (
                <Dashboard data={transactions} />
            ) : (
                <DashboardMobile data={transactions} />
            )}
        </>
    );
};
export default Home;
