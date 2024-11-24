import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import ListarVeiculos from '@/components/Veiculos/ListarVeiculos';
import CriarVeiculo from '@/components/Veiculos/CriarVeiculo';
import EditarVeiculo from '@/components/Veiculos/EditarVeiculo';
import VisualizarVeiculo from '@/components/Veiculos/VisualizarVeiculo';
import ListarMotoristas from '@/components/Motoristas/ListarMotoristas';
import CriarMotorista from '@/components/Motoristas/CriarMotorista';
import ListarSetores from '@/components/Setores/ListarSetores';
import CriarSetor from '@/components/Setores/CriarSetor';
import VisualizarSetor from '@/components/Setores/VisualizarSetor';
import EditarSetor from '@/components/Setores/EditarSetor';
import ListarUsuarios from '@/components/Usuarios/ListarUsuarios';
import EditarMotorista from '@/components/Motoristas/EditarMotorista';
import VisualizarMotorista from './components/Motoristas/VisualizarMotorista';
import CriarUsuario from '@/components/Usuarios/CriarUsuario';
import EditarUsuario from '@/components/Usuarios/EditarUsuario';
import VisualizarUsuario from '@/components/Usuarios/VisualizarUsuario';

function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/veiculos" element={<ListarVeiculos />} />
            <Route path="/veiculos/criar" element={<CriarVeiculo />} />
            <Route path="/veiculos/editar/:id" element={<EditarVeiculo />} />
            <Route path="/veiculos/visualizar/:id" element={<VisualizarVeiculo />} />
            <Route path="/motoristas" element={<ListarMotoristas />} />
            <Route path="/motoristas/criar" element={<CriarMotorista />} />
            <Route path="/motoristas/editar/:id" element={<EditarMotorista />} />
            <Route path="/motoristas/visualizar/:id" element={<VisualizarMotorista />} />
            <Route path="/setores" element={<ListarSetores />} />
            <Route path="/setores/criar" element={<CriarSetor />} />
            <Route path="/setores/editar/:id" element={<EditarSetor />} />
            <Route path="/setores/visualizar/:id" element={<VisualizarSetor />} />
            <Route path="/usuarios" element={<ListarUsuarios />} />
            <Route path="/usuarios/criar" element={<CriarUsuario />} />
            <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
            <Route path="/usuarios/visualizar/:id" element={<VisualizarUsuario />} />
        </Routes>
    );
}

export default AdminRouter;
