import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Home = () => {
    const breakpointMobile = useMediaQuery('(max-width: 767px)');
    const dashboardList = [
        {
            date: '04.11.2019',
            type: '-',
            category: 'Other',
            comments: 'A gift for wife',
            amount: '300.00',
            balance: '6900.00',
        },
        {
            date: '04.11.2019',
            type: '+',
            category: 'Car',
            comments: 'Vegetables for the week',
            amount: '1000.00',
            balance: '14000.00',
        },
    ];
    const summaryTransactionsURL = 'https://wallet.goit.ua/api/transactions';

    const [transactions, setTrans] = useState({});

    useEffect(() => {
        const getData = async () => {
            return await axios
                .get(summaryTransactionsURL)
                .then(response => response)
                .then(data => setTrans(data.data))
                .catch();
        };
        getData();
    }, []);

    console.log(transactions);
    return (
        <>
            {!breakpointMobile ? (
                <Dashboard data={transactions} />
            ) : (
                <DashboardMobile data={dashboardList} />
            )}
        </>
    );
};
export default Home;
