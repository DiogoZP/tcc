import Movimento from './Movimento';
import Upload from './Upload';
import Infracao from './Infracao';

type Motorista = {
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    categoriaCNH: string;
    numeroCNH: string;
    validadeCNH: string;
    telefone: string;
    setorId: number;
    movimentos: Movimento[];
    uploads: Upload[];
    infracoes: Infracao[];
};

export default Motorista;
