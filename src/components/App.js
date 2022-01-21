import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/diagram" element={<Statistics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
