import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as LogoIcon } from '../../assets/svgs/logo.svg';

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
                <LogoIcon />
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
