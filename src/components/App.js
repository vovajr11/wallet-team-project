import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Global } from '@emotion/react';
import { authOperations } from '../redux/auth';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';
import { GlobalStyles } from './GlobalStyles';
import { PublicRoutes, ProtectedRoutes } from './routes';

const App = ({ onGetCurrentUser }) => {
    useEffect(() => {
        onGetCurrentUser();
    });

    return (
        <BrowserRouter>
            <Global styles={GlobalStyles} />
            <Layout>
                <Routes>
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Registration />} />
                    </Route>

                    <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/diagram" element={<Statistics />} />
                        <Route
                            path="/"
                            element={<Navigate replace to="/home" />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
