import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class UploadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUploadDto: CreateUploadDto, filename: string): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    } | null>;
    update(id: number, updateUploadDto: UpdateUploadDto, filename: string): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }>;
}
