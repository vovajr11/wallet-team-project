import React from 'react';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import Dashboard from '../../components/Dashboard/Dashboard';

const currencyList = [
    {
        name: 'USD',
        purchase: 27.55,
        sale: 28,
        id: 1,
    },
    {
        name: 'EUR',
        purchase: 31.55,
        sale: 32,
        id: 2,
    },
];

const Home = () => {
    return (
        <div className="homePage">
            <h2>Main</h2>
            <h2>Statistics</h2>
            <Balance />
            <Currency data={currencyList} />
            <Dashboard />
        </div>
    );
};

export default Home;
