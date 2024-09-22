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
import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('Movimentos')
@Controller('movimentos')
export class MovimentosController {
    constructor(private readonly movimentosService: MovimentosService) {}

    @ApiCreatedResponse({ description: 'Movimento criado com sucesso' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @Post()
    async create(@Body() createMovimentoDto: CreateMovimentoDto) {
        const movimento = await this.movimentosService.create(createMovimentoDto);
        return movimento;
    }

    @ApiOkResponse({ description: 'Movimentos encontrados' })
    @Get()
    async findAll() {
        const movimentos = await this.movimentosService.findAll();
        return movimentos;
    }

    @ApiOkResponse({ description: 'Movimento encontrado com sucesso' })
    @ApiNotFoundResponse({ description: 'Movimento não encontrado' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const movimento = await this.movimentosService.findOne(+id);
        if (!movimento) {
            throw new HttpException('Movimento não encontrado', HttpStatus.NOT_FOUND);
        }
        return movimento;
    }

    @ApiOkResponse({ description: 'Movimento atualizado com sucesso' })
    @ApiNotFoundResponse({ description: 'Movimento não encontrado' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMovimentoDto: UpdateMovimentoDto) {
        const movimentoExiste = await this.movimentosService.findOne(+id);
        if (!movimentoExiste) {
            throw new HttpException('Movimento não encontrado', HttpStatus.NOT_FOUND);
        }
        const movimento = await this.movimentosService.update(+id, updateMovimentoDto);
        return movimento;
    }

    @ApiOkResponse({ description: 'Movimento deletado com sucesso' })
    @ApiNotFoundResponse({ description: 'Movimento não encontrado' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const movimentoExiste = await this.movimentosService.findOne(+id);
        if (!movimentoExiste) {
            throw new HttpException('Movimento não encontrado', HttpStatus.NOT_FOUND);
        }
        const movimento = await this.movimentosService.remove(+id);
        return movimento;
    }
}
