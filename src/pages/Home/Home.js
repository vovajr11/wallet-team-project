import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import Loader from '../../components/Loader/Loader';
import { fetchTransactions } from '../../redux/transactions/transactionsSlice';
import { getCategories } from '../../redux/categories/categoriesSlice';

const Home = () => {
    const dispatch = useDispatch();
    let transactionsAll = useSelector(state => state.transactions.items);
    let transactionsCategories = useSelector(state => state.categories.items);

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    const transactionHandler = (transactionsArray, categoriesArray) => {
        const dataArray = transactionsArray.map(item => {
            for (let i = 0; i < categoriesArray.length; i++) {
                if (item.categoryId === categoriesArray[i].id) {
                    let category = { category: categoriesArray[i].name };
                    return Object.assign({}, item, category);
                }
            }
        });

        const sortAndFormatTransacions = () => {
            const sorted = [...dataArray].sort(
                (a, b) =>
                    Date.parse(new Date(b.transactionDate)) -
                    Date.parse(new Date(a.transactionDate)),
            );
            const formated = [...sorted].map(transaction => {
                const date = new Date(
                    transaction.transactionDate,
                ).toLocaleDateString();
                return { ...transaction, transactionDate: date };
            });
            return formated;
        };

        setTransactions(sortAndFormatTransacions);
    };

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchTransactions());
    }, [dispatch]);

    useEffect(() => {
        transactionHandler(transactionsAll, transactionsCategories);
        setLoading(false);
    }, [transactionsAll]);

    return (
        <>
            {loading && transactions.length === 0 ? (
                <Loader />
            ) : (
                <Component data={transactions} />
            )}
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
