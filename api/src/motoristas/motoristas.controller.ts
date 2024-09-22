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
import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('Motoristas')
@Controller('motoristas')
export class MotoristasController {
    constructor(private readonly motoristasService: MotoristasService) {}

    @ApiCreatedResponse({ description: 'Motorista criado com sucesso' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @Post()
    async create(@Body() createMotoristaDto: CreateMotoristaDto) {
        const motorista = await this.motoristasService.create(createMotoristaDto);
        return motorista;
    }

    @ApiOkResponse({ description: 'Motoristas encontrados' })
    @Get()
    async findAll() {
        const motoristas = await this.motoristasService.findAll();
        return motoristas;
    }

    @ApiOkResponse({ description: 'Motorista encontrado com sucesso' })
    @ApiNotFoundResponse({ description: 'Motorista não encontrado' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const motorista = await this.motoristasService.findOne(+id);
        if (!motorista) {
            throw new HttpException('Motorista não encontrado', HttpStatus.NOT_FOUND);
        }
        return motorista;
    }

    @ApiOkResponse({ description: 'Motorista atualizado com sucesso' })
    @ApiNotFoundResponse({ description: 'Motorista não encontrado' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMotoristaDto: UpdateMotoristaDto) {
        const motoristaExiste = await this.motoristasService.findOne(+id);
        if (!motoristaExiste) {
            throw new HttpException('Motorista não encontrado', HttpStatus.NOT_FOUND);
        }
        const motorista = await this.motoristasService.update(+id, updateMotoristaDto);
        return motorista;
    }

    @ApiOkResponse({ description: 'Motorista deletado com sucesso' })
    @ApiNotFoundResponse({ description: 'Motorista não encontrado' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const motoristaExiste = await this.motoristasService.findOne(+id);
        if (!motoristaExiste) {
            throw new HttpException('Motorista não encontrado', HttpStatus.NOT_FOUND);
        }
        const motorista = await this.motoristasService.remove(+id);
        return motorista;
    }
}
