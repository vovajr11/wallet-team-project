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
import Currency from './Currency/Currency';
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
                    <Route path="*" element={<NotFound />} />

                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Layout>
                                    <Home />
                                </Layout>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route
                        path="/diagram"
                        element={
                            <ProtectedRoute>
                                <Layout>
                                    <Statistics />
                                </Layout>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/currency"
                        element={
                            <ProtectedRoute>
                                <Layout>
                                    <Currency />
                                </Layout>
                            </ProtectedRoute>
                        }
                    />

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
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
