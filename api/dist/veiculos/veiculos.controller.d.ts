import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculosController {
    private readonly veiculosService;
    constructor(veiculosService: VeiculosService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
    }>;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
    }>;
}
