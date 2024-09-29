import axios from 'axios';
import Setor from '@/types/Setor';

class SetoresService {
    static async listar() {
        const { data } = await axios.get('http://localhost:3000/setores');
        return data;
    }
    
    static async criar(setor: Setor) {
        const { data } = await axios.post('http://localhost:3000/setores', setor);
        return data;
    }
    
    static async atualizar(setor: Setor) {
        const { data } = await axios.put(`http://localhost:3000/setores/${setor.id}`, setor);
        return data;
    }
    
    static async remover(id: number) {
        const { data } = await axios.delete(`http://localhost:3000/setores/${id}`);
        return data;
    }
}

export default SetoresService;