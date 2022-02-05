import { ReactComponent as LogoIcon } from '../../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { ModalLogout } from '../ModalLogout/ModalLogoutBody';

import {
    Header,
    HeaderInner,
    LogoW,
    HeaderEntrance,
    HeaderEntranceItem,
} from './Header.style';

const HeaderComponent = () => {
    return (
        <Header>
            <HeaderInner>
                <NavLink to="/home">
                    <LogoW>
                        <LogoIcon />
                    </LogoW>
                </NavLink>
                <HeaderEntrance>
                    <HeaderEntranceItem>Name</HeaderEntranceItem>
                    <HeaderEntranceItem>
                        <ModalLogout />
                    </HeaderEntranceItem>
                </HeaderEntrance>
            </HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
