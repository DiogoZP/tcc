import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
export declare class MovimentosController {
    private readonly movimentosService;
    constructor(movimentosService: MovimentosService);
    create(createMovimentoDto: CreateMovimentoDto): Promise<{
        id: number;
        deleted: boolean;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    findAll(): Promise<({
        veiculo: {
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
            id: number;
            deleted: boolean;
        };
        motorista: {
            categoriaCNH: string;
            setorId: number;
            id: number;
            deleted: boolean;
            nome: string;
            cpf: string;
            rg: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
        };
    } & {
        id: number;
        deleted: boolean;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    })[]>;
    findOne(id: string): Promise<{
        veiculo: {
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
            id: number;
            deleted: boolean;
        };
        motorista: {
            categoriaCNH: string;
            setorId: number;
            id: number;
            deleted: boolean;
            nome: string;
            cpf: string;
            rg: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
        };
    } & {
        id: number;
        deleted: boolean;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    update(id: string, updateMovimentoDto: UpdateMovimentoDto): Promise<{
        veiculo: {
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
            id: number;
            deleted: boolean;
        };
        motorista: {
            categoriaCNH: string;
            setorId: number;
            id: number;
            deleted: boolean;
            nome: string;
            cpf: string;
            rg: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
        };
    } & {
        id: number;
        deleted: boolean;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    remove(id: string): Promise<{
        veiculo: {
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
            id: number;
            deleted: boolean;
        };
        motorista: {
            categoriaCNH: string;
            setorId: number;
            id: number;
            deleted: boolean;
            nome: string;
            cpf: string;
            rg: string;
            numeroCNH: string;
            validadeCNH: Date;
            telefone: string;
            endereco: string;
        };
    } & {
        id: number;
        deleted: boolean;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
}
