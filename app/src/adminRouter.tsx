import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import ListarVeiculos from '@/components/Veiculos/ListarVeiculos';
import CriarVeiculo from '@/components/Veiculos/CriarVeiculo';

function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/veiculos" element={<ListarVeiculos />} />
            <Route path="/veiculos/criar" element={<CriarVeiculo />} />
        </Routes>
    );
}

export default AdminRouter;
