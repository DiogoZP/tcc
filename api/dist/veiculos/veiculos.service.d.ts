import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculosService {
    create(createVeiculoDto: CreateVeiculoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVeiculoDto: UpdateVeiculoDto): string;
    remove(id: number): string;
}
