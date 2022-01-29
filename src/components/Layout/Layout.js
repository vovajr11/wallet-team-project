import { useSelector } from 'react-redux';
import { Header } from '../Header';

import { StyleLayout } from './Layout.styles';

const Layout = ({ children }) => {
    const isAuthRes = useSelector(state => state.session.isAuth);
    return (
        <StyleLayout>
            {isAuthRes && <Header />}
            {children}
        </StyleLayout>
    );
};

export default Layout;
