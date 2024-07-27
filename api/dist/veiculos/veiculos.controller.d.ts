import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculosController {
    private readonly veiculosService;
    constructor(veiculosService: VeiculosService);
    create(createVeiculoDto: CreateVeiculoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): string;
    remove(id: string): string;
}
