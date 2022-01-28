import LogoutIcon from '@mui/icons-material/Logout';

import { HeaderSection, HeaderEntrance } from './Header.style';

const Header = () => {
    return (
        <HeaderSection>
            <a href="#">
                {/* <img src={logo} alt="Wallet" /> */}
                <svg>
                    <use xlinkHref="./assets/svg/pictures-min.svg#chart"></use>
                </svg>
            </a>
            <HeaderEntrance>
                <li>Name</li>
                <li>
                    <LogoutIcon />
                    <span>exit</span>
                </li>
            </HeaderEntrance>
        </HeaderSection>
    );
};

export default Header;
