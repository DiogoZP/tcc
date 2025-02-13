import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculosController {
    private readonly veiculosService;
    constructor(veiculosService: VeiculosService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
    }>;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
    }>;
}
