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
import { NavLink } from 'react-router-dom';

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
    const isAuth = useSelector(state => state.session.isAuth);
    console.log(isAuth, 'isAuth');
    return (
        <StyleLayout>
            {!isAuth && <>{children}</>}
            {isAuth && (
                <>
                    <Header />
                    <main>
                        <MainContainer>
                            <MainAside>
                                <MainAsideTop>
                                    <Navigation>
                                        <li>
                                            <NavLink to="/home">Main</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/diagram">
                                                Statistics
                                            </NavLink>
                                        </li>
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
                </>
            )}
        </StyleLayout>
    );
};

export default Layout;
