import { useSelector } from 'react-redux';
import { Header } from '../Header';

const Layout = ({ children }) => {
    const isAuthRes = useSelector(state => state.session.isAuth);
    return (
        <div>
            {isAuthRes && <Header />}
            {children}
        </div>
    );
};

export default Layout;
