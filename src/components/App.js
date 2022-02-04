import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Global } from '@emotion/react';
import { authOperations } from '../redux/auth';
import Layout from './Layout/Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';
import { GlobalStyles } from './GlobalStyles';
import ProtectedRoute from './Routes/ProtectedRoute';
import AuthRoute from './Routes/AuthRoute';

const App = ({ onGetCurrentUser }) => {
    useEffect(() => {
        onGetCurrentUser();
    });

    return (
        <>
            <Global styles={GlobalStyles} />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/register"
                        element={
                            <AuthRoute restricted>
                                <Registration />
                            </AuthRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <AuthRoute restricted>
                                <Login />
                            </AuthRoute>
                        }
                    />

                    <Route path="*" element={<NotFound />} />

                    <Route path="/" element={<Layout />}>
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/"
                            element={<Navigate replace to="/home" />}
                        />
                        <Route
                            path="/diagram"
                            element={
                                <ProtectedRoute>
                                    <Statistics />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
