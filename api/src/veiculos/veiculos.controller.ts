import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Controller('veiculos')
export class VeiculosController {
    constructor(private readonly veiculosService: VeiculosService) {}

    @Post()
    async create(@Body() createVeiculoDto: CreateVeiculoDto) {
        const veiculo = await this.veiculosService.create(createVeiculoDto);
        return veiculo;
    }

    @Get()
    async findAll() {
        const veiculos = await this.veiculosService.findAll();
        return veiculos;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const veiculo = await this.veiculosService.findOne(+id);
        if (!veiculo) {
            throw new HttpException('Veículo não encontrado', 404);
        }
        return veiculo;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new HttpException('Veículo não encontrado', 404);
        }
        const veiculo = await this.veiculosService.update(+id, updateVeiculoDto);
        return veiculo;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new HttpException('Veículo não encontrado', 404);
        }
        await this.veiculosService.remove(+id);
    }
}
