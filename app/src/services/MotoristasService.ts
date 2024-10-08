import axios from 'axios';
import { Motorista, MotoristaForm } from '@/types/Motorista';

export default  class MotoristasService {
    static async listar(): Promise<Motorista[]> {
        const { data } = await axios.get<Motorista[]>('http://localhost:3000/motoristas');
        return data;
    }

    static async buscar(id: number): Promise<Motorista> {
        const { data } = await axios.get<Motorista>(`http://localhost:3000/motoristas/${id}`);
        return data;
    }

    static async criar(motorista: MotoristaForm): Promise<Motorista> {
        const { data } = await axios.post<Motorista>('http://localhost:3000/motoristas/', motorista);
        return data;
    }

    static async atualizar(motorista: Partial<MotoristaForm>): Promise<Motorista> {
        const { data } = await axios.patch<Motorista>(`http://localhost:3000/motoristas/${motorista.id}`, motorista);
        return data;
    }

    static async remover(id: number): Promise<Motorista> {
        const { data } = await axios.delete<Motorista>(`http://localhost:3000/motoristas/${id}`);
        return data;
    }
}