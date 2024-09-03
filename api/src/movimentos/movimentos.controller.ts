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

@Controller('movimentos')
export class MovimentosController {
    constructor(private readonly movimentosService: MovimentosService) {}

    @Post()
    async create(@Body() createMovimentoDto: CreateMovimentoDto) {
        const movimento = await this.movimentosService.create(createMovimentoDto);
        return movimento;
    }

    @Get()
    async findAll() {
        const movimentos = await this.movimentosService.findAll();
        return movimentos;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const movimento = await this.movimentosService.findOne(+id);
        if (!movimento) {
            throw new HttpException('Movimento não encontrado', HttpStatus.NOT_FOUND);
        }
        return movimento;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMovimentoDto: UpdateMovimentoDto) {
        const movimentoExiste = await this.movimentosService.findOne(+id);
        if (!movimentoExiste) {
            throw new HttpException('Movimento não encontrado', HttpStatus.NOT_FOUND);
        }
        const movimento = await this.movimentosService.update(+id, updateMovimentoDto);
        return movimento;
    }

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
