import axios from 'axios';
import { VeiculoForm, Veiculo } from '@/types/Veiculo';

class VeiculosService {
    static async listar(): Promise<Veiculo[]> {
        const { data } = await axios.get('http://localhost:3000/veiculos');
        return data;
    }

    static async buscar(id: number): Promise<Veiculo> {
        const { data } = await axios.get(`http://localhost:3000/veiculos/${id}`);
        return data;
    }

    static async criar(veiculo: VeiculoForm): Promise<Veiculo> {
        const { data } = await axios.post('http://localhost:3000/veiculos', veiculo);
        return data;
    }

    static async atualizar(veiculo: Partial<VeiculoForm>): Promise<Veiculo> {
        const { data } = await axios.patch(`http://localhost:3000/veiculos/${veiculo.id}`, veiculo);
        return data;
    }

    static async remover(id: number): Promise<Veiculo> {
        const { data } = await axios.delete(`http://localhost:3000/veiculos/${id}`);
        return data;
    }
}

export default VeiculosService;
