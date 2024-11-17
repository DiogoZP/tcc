import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
@ApiTags('Veículos')
@ApiBearerAuth()
@Controller('veiculos')
export class VeiculosController {
    constructor(private readonly veiculosService: VeiculosService) {}

    @ApiCreatedResponse({ description: 'Veículo criado com sucesso' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @Post()
    async create(@Body() createVeiculoDto: CreateVeiculoDto) {
        const veiculo = await this.veiculosService.create(createVeiculoDto);
        return veiculo;
    }

    @ApiOkResponse({ description: 'Veículos encontrados' })
    @Get()
    async findAll() {
        const veiculos = await this.veiculosService.findAll();
        return veiculos;
    }

    @ApiOkResponse({ description: 'Veículo encontrado com sucesso' })
    @ApiNotFoundResponse({ description: 'Veículo não encontrado' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const veiculo = await this.veiculosService.findOne(+id);
        if (!veiculo) {
            throw new HttpException('Veículo não encontrado', HttpStatus.NOT_FOUND);
        }
        return veiculo;
    }

    @ApiOkResponse({ description: 'Veículo atualizado com sucesso' })
    @ApiNotFoundResponse({ description: 'Veículo não encontrado' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new HttpException('Veículo não encontrado', HttpStatus.NOT_FOUND);
        }
        const veiculo = await this.veiculosService.update(+id, updateVeiculoDto);
        return veiculo;
    }

    @ApiOkResponse({ description: 'Veículo removido com sucesso' })
    @ApiNotFoundResponse({ description: 'Veículo não encontrado' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new HttpException('Veículo não encontrado', HttpStatus.NOT_FOUND);
        }
        const veiculo = await this.veiculosService.remove(+id);
        return veiculo;
    }
}
