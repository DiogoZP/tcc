import Motorista from './Motorista';
import Veiculo from './Veiculo';

type Movimento = {
    id: number;
    dataSaida: string;
    dataRetorno: string;
    kmSaida: number;
    kmRetorno: number;
    itinerario: string;
    motorista: Motorista;
    motoristaId: number;
    veiculo: Veiculo;
    veiculoId: number;
}

export default Movimento;