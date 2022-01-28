import LogoutIcon from '@mui/icons-material/Logout';
// import { ReactElement as LogoIcon } from '../../../assets/svg/logo.svg';
import logo from './img/logo.svg';
import {
    HeaderSection,
    HeaderEntrance,
    HeaderEntranceItem,
    LogoutIconW,
} from './Header.style';

const Header = () => {
    return (
        <HeaderSection>
            <a href="#">
                {/* <LogoIcon /> */}
                <img src={logo} alt="Wallet" />
                {/* <svg>
                    <use xlinkHref="./assets/svg/logo.svg"></use>
                </svg> */}
            </a>
            <HeaderEntrance>
                <HeaderEntranceItem>Name</HeaderEntranceItem>
                <HeaderEntranceItem>
                    <LogoutIconW>
                        <LogoutIcon />
                    </LogoutIconW>
                    Exit
                </HeaderEntranceItem>
            </HeaderEntrance>
        </HeaderSection>
    );
};

export default Header;
