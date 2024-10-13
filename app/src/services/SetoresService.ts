import axios from 'axios';
import { Setor } from '@/types/Setor';

export default class SetoresService {
    static async listar(): Promise<Setor[]> {
        const { data } = await axios.get<Setor[]>('http://localhost:3000/setores');
        return data;
    }

    static async buscar(id: number): Promise<Setor> {
        const { data } = await axios.get<Setor>(`http://localhost:3000/setores/${id}`);
        return data;
    }

    static async criar(setor: Setor): Promise<Setor> {
        const { data } = await axios.post<Setor>('http://localhost:3000/setores', setor);
        return data;
    }

    static async atualizar(setor: Setor): Promise<Setor> {
        const { data } = await axios.patch<Setor>(`http://localhost:3000/setores/${setor.id}`, setor);
        return data;
    }

    static async remover(id: number): Promise<Setor> {
        const { data } = await axios.delete<Setor>(`http://localhost:3000/setores/${id}`);
        return data;
    }
}
