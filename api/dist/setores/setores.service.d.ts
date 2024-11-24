import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class SetoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSetorDto: CreateSetorDto): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    } | null>;
    update(id: number, updateSetorDto: UpdateSetorDto): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
}
