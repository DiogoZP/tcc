import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';

@Controller('motoristas')
export class MotoristasController {
    constructor(private readonly motoristasService: MotoristasService) {}

    @Post()
    async create(@Body() createMotoristaDto: CreateMotoristaDto) {
        return this.motoristasService.create(createMotoristaDto);
    }

    @Get()
    async findAll() {
        return this.motoristasService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.motoristasService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMotoristaDto: UpdateMotoristaDto) {
        return this.motoristasService.update(+id, updateMotoristaDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.motoristasService.remove(+id);
    }
}
