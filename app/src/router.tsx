import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/components/Dashboard';
import Login from '@/components/Login';
import App from '@/components/App';
import NotFound from '@/components/Notfound';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin/*" element={<App />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="404" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
