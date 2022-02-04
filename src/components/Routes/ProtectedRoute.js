import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, redirectTo = '/login' }) {
    const isLoggedIn = useSelector(state => state.session.isAuth);
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
