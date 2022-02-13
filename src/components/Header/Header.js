import { ReactComponent as LogoIcon } from '../../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { ModalLogout } from '../ModalLogout/ModalLogoutBody';

import { useSelector } from 'react-redux';

import {
    Header,
    HeaderInner,
    LogoW,
    HeaderEntrance,
    HeaderEntranceItem,
} from './Header.style';

const HeaderComponent = () => {
    const userName = useSelector(state => state.session.user.username);
    return (
        <Header>
            <HeaderInner>
                <NavLink to="/home">
                    <LogoW>
                        <LogoIcon />
                    </LogoW>
                </NavLink>
                <HeaderEntrance>
                    <HeaderEntranceItem>{userName}</HeaderEntranceItem>
                    <HeaderEntranceItem>
                        <ModalLogout />
                    </HeaderEntranceItem>
                </HeaderEntrance>
            </HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
