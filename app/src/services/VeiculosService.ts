import axios from 'axios';
import Veiculo from '@/types/Veiculo';

class VeiculosService {
  static async listar() {
    const { data } = await axios.get('http://localhost:3000/veiculos');
    return data;
  }

  static async criar(veiculo: Veiculo) {
    const { data } = await axios.post('http://localhost:3000/veiculos', veiculo);
    return data;
  }

  static async atualizar(veiculo: Veiculo) {
    const { data } = await axios.put(`http://localhost:3000/veiculos/${veiculo.id}`, veiculo);
    return data;
  }

  static async remover(id: number) {
    const { data } = await axios.delete(`http://localhost:3000/veiculos/${id}`);
    return data;
  }
}

export default VeiculosService;