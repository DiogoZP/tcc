import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
export declare class MovimentosController {
    private readonly movimentosService;
    constructor(movimentosService: MovimentosService);
    create(createMovimentoDto: CreateMovimentoDto): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
        deleted: boolean;
    }>;
    findAll(): Promise<({
        veiculo: {
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
            setorId: number;
            deleted: boolean;
        };
        motorista: {
            id: number;
            nome: string;
            cpf: string;
            rg: string;
            categoriaCNH: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
            setorId: number;
            deleted: boolean;
        };
    } & {
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
        deleted: boolean;
    })[]>;
    findOne(id: string): Promise<{
        veiculo: {
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
            setorId: number;
            deleted: boolean;
        };
        motorista: {
            id: number;
            nome: string;
            cpf: string;
            rg: string;
            categoriaCNH: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
            setorId: number;
            deleted: boolean;
        };
    } & {
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
        deleted: boolean;
    }>;
    update(id: string, updateMovimentoDto: UpdateMovimentoDto): Promise<{
        veiculo: {
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
            setorId: number;
            deleted: boolean;
        };
        motorista: {
            id: number;
            nome: string;
            cpf: string;
            rg: string;
            categoriaCNH: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
            setorId: number;
            deleted: boolean;
        };
    } & {
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
        deleted: boolean;
    }>;
    remove(id: string): Promise<{
        veiculo: {
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
            setorId: number;
            deleted: boolean;
        };
        motorista: {
            id: number;
            nome: string;
            cpf: string;
            rg: string;
            categoriaCNH: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
            setorId: number;
            deleted: boolean;
        };
    } & {
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
        deleted: boolean;
    }>;
}
