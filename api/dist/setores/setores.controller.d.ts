import { SetoresService } from './setores.service';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
export declare class SetoresController {
    private readonly setoresService;
    constructor(setoresService: SetoresService);
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
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
    update(id: string, updateSetorDto: UpdateSetorDto): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        deleted: boolean;
    }>;
}
