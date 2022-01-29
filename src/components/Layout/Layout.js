import { useSelector } from 'react-redux';
import { Header } from '../Header';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import Home from '../../pages/Home/Home';
import {
    StyleLayout,
    MainContainer,
    MainContent,
    MainAside,
    Navigation,
    MainAsideTop,
} from './Layout.styles';

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

const Layout = ({ children }) => {
    const isAuthRes = useSelector(state => state.session.isAuth);
    return (
        <StyleLayout>
            {isAuthRes && (
                <div>
                    <Header />
                    <main>
                        <MainContainer>
                            <MainAside>
                                <MainAsideTop>
                                    <Navigation>
                                        <li>Main</li>
                                        <li>Statistics</li>
                                        <li className="currencyItemForMobile">
                                            Icon
                                        </li>
                                    </Navigation>
                                    <Balance />
                                </MainAsideTop>
                                <Currency data={currencyList} />
                            </MainAside>
                            <MainContent>{children}</MainContent>
                        </MainContainer>
                    </main>
                </div>
            )}
        </StyleLayout>
    );
};

export default Layout;
