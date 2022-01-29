import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';

import {
    MainContainer,
    MainContent,
    MainAside,
    Navigation,
    MainAsideTop,
} from './Home.styles';

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
        <main>
            <MainContainer>
                <MainAside>
                    <MainAsideTop>
                        <Navigation>
                            <li>Main</li>
                            <li>Statistics</li>
                            <li className="currencyItemForMobile">Icon</li>
                        </Navigation>
                        <Balance />
                    </MainAsideTop>
                    <Currency data={currencyList} />
                </MainAside>
                <MainContent>
                    <Dashboard />
                </MainContent>
            </MainContainer>
        </main>
    );
};

export default Home;
