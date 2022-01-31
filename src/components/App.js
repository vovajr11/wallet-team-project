import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';

const App = ({ onGetCurrentUser }) => {
    useEffect(() => {
        onGetCurrentUser();
    });

    return (
        <>
            <Global styles={GlobalStyles} />
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            path="/register"
                            element={
                                <PublicRoute restricted>
                                    <Registration />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute restricted>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/diagram"
                            element={
                                <ProtectedRoute>
                                    <Statistics />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
