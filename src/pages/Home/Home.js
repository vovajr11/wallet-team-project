import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Home = () => {
    const breakpointMobile = useMediaQuery('(max-width: 767px)');

    const transactionsURL = 'https://wallet.goit.ua/api/';

    //const [transactions, setTransactions] = useState([]);
    //const [categories, setCategories] = useState([]);
    const [newT, setNewT] = useState(transactions);

    useEffect(() => {
        const getTransactions = async () => {
            return await axios
                .get(`${transactionsURL}transactions`)
                .then(data => setTransactions(data.data))
                .catch();
        };
        getTransactions();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            return await axios
                .get(`${transactionsURL}transaction-categories`)
                //.then(data => setCategories(data.data))
                .then(data => setNewT(categoriesHandler(transactions, data)))
                .catch();
        };
        getCategories();
    }, []);
    const categoriesHandler = async (arr1, arr2) => {
        let bla = arr1.map(item => {
            for (let i = 0; i < arr2.length; i++) {
                if (item.categoryId === arr2[i].id) {
                    let category = { category: arr2[i].name };
                    return Object.assign({}, item, category);
                }
            }
        });
        return await setNewT(bla);
    };

    return (
        <>
            {!breakpointMobile ? (
                <Dashboard data={newT} />
            ) : (
                <DashboardMobile data={transactions} />
            )}
        </>
    );
};
export default Home;
