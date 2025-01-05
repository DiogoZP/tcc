import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class SetoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSetorDto: CreateSetorDto): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
    findAll(): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    } | null>;
    update(id: number, updateSetorDto: UpdateSetorDto): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
}
