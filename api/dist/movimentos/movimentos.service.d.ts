import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
export declare class MovimentosService {
    create(createMovimentoDto: CreateMovimentoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMovimentoDto: UpdateMovimentoDto): string;
    remove(id: number): string;
}
