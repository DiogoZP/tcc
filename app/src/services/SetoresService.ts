import axios from '@/axios';
import { Setor, SetorForm } from '@/types/Setor';

export default class SetoresService {
    static async listar(): Promise<Setor[]> {
        const { data } = await axios.get<Setor[]>('/setores');
        return data;
    }

    static async buscar(id: number): Promise<Setor> {
        const { data } = await axios.get<Setor>(`/setores/${id}`);
        return data;
    }

    static async criar(setor: SetorForm): Promise<Setor> {
        const { data } = await axios.post<Setor>('/setores', setor);
        return data;
    }

    static async atualizar(setor: SetorForm): Promise<Setor> {
        const { data } = await axios.patch<Setor>(`/setores/${setor.id}`, setor);
        return data;
    }

    static async remover(id: number): Promise<Setor> {
        const { data } = await axios.delete<Setor>(`/setores/${id}`);
        return data;
    }
}
