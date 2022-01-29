import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const loggedIn = useSelector(state => state.session.isAuth);
    // const loggedIn = true;
    const user = { loggedIn };

    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoutes = () => {
    const isAuth = useAuth();

    // return isAuth ? <Navigate to="/home" /> : <Outlet />;
    return isAuth ? <Navigate to="/diagram" /> : <Outlet />;
};

export { ProtectedRoutes, PublicRoutes };
