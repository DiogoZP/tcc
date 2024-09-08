import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class VeiculosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<{
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
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
        };
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
    })[]>;
    findOne(id: number): Promise<{
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
    } | null>;
    update(id: number, updateVeiculoDto: UpdateVeiculoDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
