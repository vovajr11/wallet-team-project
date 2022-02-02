import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as LogoIcon } from '../../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { ModalLogout } from '..';

import {
    Header,
    HeaderInner,
    HeaderEntrance,
    HeaderEntranceItem,
    LogoutBtn,
    LogoutIconW,
    LogoutBtnText,
} from './Header.style';

const HeaderComponent = () => {
    return (
        <Header>
            <ModalLogout />
            <HeaderInner>
                <NavLink to="/home">
                    <LogoIcon />
                </NavLink>
                <HeaderEntrance>
                    <HeaderEntranceItem>Name</HeaderEntranceItem>
                    <HeaderEntranceItem>
                        <LogoutBtn>
                            <LogoutIconW>
                                <LogoutIcon style={{ fill: '#bdbdbd' }} />
                            </LogoutIconW>
                            <LogoutBtnText onClick={handleOpen}>
                                Exit
                            </LogoutBtnText>
                        </LogoutBtn>
                    </HeaderEntranceItem>
                </HeaderEntrance>
            </HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
