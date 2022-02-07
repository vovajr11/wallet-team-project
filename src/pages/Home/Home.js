import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardMobile from '../../components/Dashboard/DashboardMobile';
import useMediaQuery from '@mui/material/useMediaQuery';

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

    return (
        <>
            {!breakpointMobile ? (
                <Dashboard data={dashboardList} />
            ) : (
                <DashboardMobile data={dashboardList} />
            )}
        </>
    );
};
export default Home;
