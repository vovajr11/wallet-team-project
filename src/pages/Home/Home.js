import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';

import axios from 'axios';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const BREACKPOINTMOBILE = useMediaQuery('(max-width: 767px)');
    const URL = 'https://wallet.goit.ua/api/';

    const [transactions, setTransactions] = useState([]);

    const getTransactions = async () => {
        const trans = await axios.get(`${URL}transactions`);
        const categories = await axios.get(`${URL}transaction-categories`);
        transactionHandler(trans.data, categories.data);
    };

    const transactionHandler = (transactionsArray, categoriesArray) => {
        const data = transactionsArray.map(item => {
            for (let i = 0; i < categoriesArray.length; i++) {
                if (item.categoryId === categoriesArray[i].id) {
                    let category = { category: categoriesArray[i].name };
                    return Object.assign({}, item, category);
                }
            }
        });

        const sortTransactions = transactions => {
            return transactions.sort(
                (a, b) =>
                    Date.parse(new Date(b.transactionDate)) -
                    Date.parse(new Date(a.transactionDate)),
            );
        };

        setTransactions(sortTransactions(data));
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            {!BREACKPOINTMOBILE ? (
                <Dashboard data={transactions} />
            ) : (
                <DashboardMobile data={transactions} />
            )}
            <ModalAddTransaction />
        </>
    );
};
export default Home;
