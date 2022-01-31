import { useSelector } from 'react-redux';
import { Header } from '../Header';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import { ReactComponent as HomeIcon } from '../../assets/svgs/main.svg';
import { ReactComponent as StatisticIcon } from '../../assets/svgs/statistic.svg';
import { ReactComponent as CurrencyIcon } from '../../assets/svgs/currencyIcon.svg';

import {
    StyleLayout,
    MainContainer,
    MainContent,
    Aside,
    Navigation,
    AsideTop,
} from './Layout.styles';
import { NavLink } from 'react-router-dom';

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
                            <Aside>
                                <AsideTop>
                                    <Navigation>
                                        <li>
                                            <NavLink
                                                to="/home"
                                                className="NavLink"
                                            >
                                                <HomeIcon />
                                                <span>Main</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/diagram"
                                                className="NavLink"
                                            >
                                                <StatisticIcon />
                                                <span>Statistics</span>
                                            </NavLink>
                                        </li>
                                        <li className="currencyItemForMobile">
                                            <CurrencyIcon />
                                        </li>
                                    </Navigation>
                                    <Balance />
                                </AsideTop>
                                <Currency />
                            </Aside>
                            <MainContent>{children}</MainContent>
                        </MainContainer>
                    </main>
                </>
            )}
        </StyleLayout>
    );
};

export default Layout;
