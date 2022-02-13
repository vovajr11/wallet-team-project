import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import Loader from '../../components/Loader/Loader';

import axios from 'axios';
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const URL = 'https://wallet.goit.ua/api/';

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

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

        const sortTransactions = () => {
            return [...data].sort(
                (a, b) =>
                    Date.parse(new Date(b.transactionDate)) -
                    Date.parse(new Date(a.transactionDate)),
            );
        };

        setTransactions(sortTransactions);
        setLoading(false);
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            {loading ? <Loader /> : <Component data={transactions} />}
            <ModalAddTransaction />
        </>
    );
};

const Component = ({ data }) => {
    const BREACKPOINTMOBILE = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {!BREACKPOINTMOBILE ? (
                <Dashboard data={data} />
            ) : (
                <DashboardMobile data={data} />
            )}
        </>
    );
};

export default Home;
