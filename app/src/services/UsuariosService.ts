import axios from '@/axios';
import { Usuario, UsuarioForm } from '@/types/Usuario';

export default class UsuariosService {
    static async listar(): Promise<Usuario[]> {
        const { data } = await axios.get<Usuario[]>('/usuarios');
        return data;
    }

    static async buscar(id: number): Promise<Usuario> {
        const { data } = await axios.get<Usuario>(`/usuarios/${id}`);
        return data;
    }

    static async criar(usuario: UsuarioForm): Promise<Usuario> {
        const { data } = await axios.post<Usuario>('/usuarios', usuario);
        return data;
    }

    static async atualizar(usuario: UsuarioForm): Promise<Usuario> {
        const { data } = await axios.patch<Usuario>(`/usuarios/${usuario.id}`, usuario);
        return data;
    }

    static async remover(id: number): Promise<Usuario> {
        const { data } = await axios.delete<Usuario>(`/usuarios/${id}`);
        return data;
    }
}