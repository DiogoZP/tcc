import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
export declare class MovimentosController {
    private readonly movimentosService;
    constructor(movimentosService: MovimentosService);
    create(createMovimentoDto: CreateMovimentoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMovimentoDto: UpdateMovimentoDto): string;
    remove(id: string): string;
}
