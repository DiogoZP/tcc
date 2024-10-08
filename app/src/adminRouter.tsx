import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import ListarVeiculos from '@/components/Veiculos/ListarVeiculos';
import CriarVeiculo from '@/components/Veiculos/CriarVeiculo';
import EditarVeiculo from '@/components/Veiculos/EditarVeiculo';
import ListarMotoristas from '@/components/Motoristas/ListarMotoristas';

function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/veiculos" element={<ListarVeiculos />} />
            <Route path="/veiculos/criar" element={<CriarVeiculo />} />
            <Route path="/veiculos/editar/:id" element={<EditarVeiculo />} />
            <Route path="/motoristas" element={<ListarMotoristas />} />
        </Routes>
    );
}

export default AdminRouter;
