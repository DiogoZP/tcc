import Movimento from './Movimento';
import Upload from './Upload';
import Solicitacao from './Solicitacao';
import Infracao from './Infracao';
import Setor from './Setor';

type Veiculo = {
    id: number;
    placa: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    cor: string;
    renavam: string;
    chassi: string;
    km: number;
    combustivel: string;
    categoriaCNH: string;
    status: string;
    setor: Setor;
    setorId: number;
    movimentos: Movimento[];
    uploads: Upload[];
    solicitacoes: Solicitacao[];
    infracoes: Infracao[];
};

export default Veiculo;
