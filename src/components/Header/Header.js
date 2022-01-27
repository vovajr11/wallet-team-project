import logo from './img/logo.svg';
import exit from './img/exit.svg';

import { HeaderSection, HeaderEntrance } from './Header.style';

const Header = () => {
    return (
        <HeaderSection>
            <a href="#">
                <img src={logo} alt="Wallet" />
            </a>
            <HeaderEntrance>
                <li>Name</li>
                <li>
                    <img src={exit} alt="Wallet" />
                    <span>exit</span>
                </li>
            </HeaderEntrance>
        </HeaderSection>
    );
};

export default Header;
