import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Header } from '../Header';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import { ReactComponent as HomeIcon } from '../../assets/svgs/main.svg';
import { ReactComponent as StatisticIcon } from '../../assets/svgs/statistic.svg';
import { ReactComponent as CurrencyIcon } from '../../assets/svgs/currencyIcon.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

import {
    StyleLayout,
    MainContainer,
    MainContent,
    Aside,
    Navigation,
    AsideTop,
} from './Layout.styles';

const Layout = ({ children }) => {
    const isAuth = useSelector(state => state.session.isAuth);
    const breakpointMobile = useMediaQuery('(max-width: 767px)');
    return (
        <StyleLayout>
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
                                            {breakpointMobile ? (
                                                <NavLink
                                                    to="/currency"
                                                    className="NavLink"
                                                >
                                                    <CurrencyIcon />
                                                </NavLink>
                                            ) : null}
                                        </li>
                                    </Navigation>
                                    {!breakpointMobile ? <Balance /> : null}
                                </AsideTop>
                                {!breakpointMobile ? <Currency /> : null}
                            </Aside>
                            <MainContent>{children}</MainContent>
                        </MainContainer>
                        <ModalAddTransaction />
                    </main>
                </>
            )}
        </StyleLayout>
    );
};

export default Layout;
