import axios from '@/axios';
import { VeiculoForm, Veiculo } from '@/types/Veiculo';

export default class VeiculosService {
    static async listar(): Promise<Veiculo[]> {
        const { data } = await axios.get<Veiculo[]>('/veiculos');
        return data;
    }

    static async buscar(id: number): Promise<Veiculo> {
        const { data } = await axios.get<Veiculo>(`/veiculos/${id}`);
        return data;
    }

    static async criar(veiculo: VeiculoForm): Promise<Veiculo> {
        const { data } = await axios.post<Veiculo>('/veiculos', veiculo);
        return data;
    }

    static async atualizar(veiculo: Partial<VeiculoForm>): Promise<Veiculo> {
        const { data } = await axios.patch<Veiculo>(`/veiculos/${veiculo.id}`, veiculo);
        return data;
    }

    static async remover(id: number): Promise<Veiculo> {
        const { data } = await axios.delete<Veiculo>(`/veiculos/${id}`);
        return data;
    }
}
