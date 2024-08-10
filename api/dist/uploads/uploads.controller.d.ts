import { Response } from 'express';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    create(createUploadDto: CreateUploadDto, file: Express.Multer.File): Promise<{
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
    findOne(id: string, res: Response): Promise<void>;
    update(id: string, updateUploadDto: UpdateUploadDto, file: Express.Multer.File): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        filename: string;
        motoristaId: number | null;
        veiculoId: number | null;
    }>;
}
