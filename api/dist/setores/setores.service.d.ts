import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class SetoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSetorDto: CreateSetorDto): Promise<{
        id: number;
        nome: string;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
    } | null>;
    update(id: number, updateSetorDto: UpdateSetorDto): Promise<{
        id: number;
        nome: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
    }>;
}
