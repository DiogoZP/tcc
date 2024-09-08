import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import ListarVeiculos from '@/components/Veiculos/ListarVeiculos';

function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/veiculos" element={<ListarVeiculos />} />
        </Routes>
    );
}

export default AdminRouter;
