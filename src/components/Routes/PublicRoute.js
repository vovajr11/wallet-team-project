import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/home',
}) {
    const isLoggedIn = useSelector(state => state.session.isAuth);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
