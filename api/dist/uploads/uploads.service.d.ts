import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class UploadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUploadDto: CreateUploadDto, filename: string, mimetype: string): Promise<{
        id: number;
        filename: string;
        mimetype: string;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        deleted: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        filename: string;
        mimetype: string;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        filename: string;
        mimetype: string;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        deleted: boolean;
    } | null>;
    update(id: number, updateUploadDto: UpdateUploadDto, filename?: string, mimetype?: string): Promise<{
        id: number;
        filename: string;
        mimetype: string;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        deleted: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        filename: string;
        mimetype: string;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        deleted: boolean;
    }>;
}
