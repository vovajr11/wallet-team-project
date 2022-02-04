import { NavLink } from 'react-router-dom';
import { NotFoundWrap } from './NotFound.styles';

const NotFound = () => {
    return (
        <NotFoundWrap>
            <h1>404</h1>
            <h2>Sorry, this page not found</h2>
            <h2>
                Go to the <NavLink to="/home">home page</NavLink>
            </h2>
        </NotFoundWrap>
    );
};

export default NotFound;
