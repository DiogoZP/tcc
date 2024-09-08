import ItemSolicitacao from './ItemSolicitacao';

type Solicitacao = {
    id: number;
    data: string;
    veiculoId: number;
    itens: ItemSolicitacao[];
}

export default Solicitacao;