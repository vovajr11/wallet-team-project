import React from 'react';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import Dashboard from '../../components/Dashboard/Dashboard';
const Home = () => {
    return (
        <div>
            <h2>Main</h2>
            <h2>Statistics</h2>
            <Balance />
            <Currency />
            <Dashboard />
        </div>
    );
};

export default Home;
