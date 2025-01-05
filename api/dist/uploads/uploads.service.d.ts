import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class UploadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUploadDto: CreateUploadDto, filename: string, mimetype: string): Promise<{
        id: number;
        deleted: boolean;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        filename: string;
        mimetype: string;
    }>;
    findAll(): Promise<{
        id: number;
        deleted: boolean;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        filename: string;
        mimetype: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        deleted: boolean;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        filename: string;
        mimetype: string;
    } | null>;
    update(id: number, updateUploadDto: UpdateUploadDto, filename?: string, mimetype?: string): Promise<{
        id: number;
        deleted: boolean;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        filename: string;
        mimetype: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        deleted: boolean;
        motoristaId: number | null;
        veiculoId: number | null;
        itemId: number | null;
        filename: string;
        mimetype: string;
    }>;
}
