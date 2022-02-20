import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { getCurrentUser } from '../redux/auth/authAPI';
import { GlobalStyles } from './GlobalStyles';
import ProtectedRoute from './Routes/ProtectedRoute';
import AuthRoute from './Routes/AuthRoute';
import { Loader } from '../components/Loader';
import { Notification } from './Notification';

const HomePage = lazy(() =>
    import('./../pages/Home/Home'),
); /* webpackChunkName: "home-page" */

const NotFoundPage = lazy(() =>
    import('./../pages/NotFound/NotFound'),
); /* webpackChunkName: "not-found-page" */

const StatisticsPage = lazy(() =>
    import('./../pages/Statistics/Statistics'),
); /* webpackChunkName: "statistics-page" */

const Currency = lazy(() =>
    import('./Currency/Currency'),
); /* webpackChunkName: "statistics-page" */

const RegistrationPage = lazy(() =>
    import('./../pages/Registration/Registration'),
); /* webpackChunkName: "registration-page" */

const LoginPage = lazy(() =>
    import('./../pages/Login/Login'),
); /* webpackChunkName: "login-page" */

const Layout = lazy(() =>
    import('./../components/Layout/Layout'),
); /* webpackChunkName: "layout" */

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    });
    return (
        <>
            <Global styles={GlobalStyles} />
            <Notification />
            <Suspense fallback={<Loader fullscreen />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />

                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Layout>
                                        <HomePage />
                                    </Layout>
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
                                    <Layout>
                                        <StatisticsPage />
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
                                    <RegistrationPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <AuthRoute restricted>
                                    <LoginPage />
                                </AuthRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
};

export default App;
