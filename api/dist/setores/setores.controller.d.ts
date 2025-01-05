import { SetoresService } from './setores.service';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
export declare class SetoresController {
    private readonly setoresService;
    constructor(setoresService: SetoresService);
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
    findOne(id: string): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
    update(id: string, updateSetorDto: UpdateSetorDto): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        deleted: boolean;
        nome: string;
    }>;
}
