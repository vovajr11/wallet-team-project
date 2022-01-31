import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as LogoIcon } from '../../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';

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
                            <LogoutBtnText>Exit</LogoutBtnText>
                        </LogoutBtn>
                    </HeaderEntranceItem>
                </HeaderEntrance>
            </HeaderInner>
        </Header>
    );
};

export default HeaderComponent;
