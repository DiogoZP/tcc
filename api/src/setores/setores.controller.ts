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
import { SetoresService } from './setores.service';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';

@Controller('setores')
export class SetoresController {
    constructor(private readonly setoresService: SetoresService) {}

    @Post()
    async create(@Body() createSetorDto: CreateSetorDto) {
        const setor = await this.setoresService.create(createSetorDto);
        return setor;
    }

    @Get()
    async findAll() {
        const setores = await this.setoresService.findAll();
        return setores;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const setor = await this.setoresService.findOne(+id);
        if (!setor) {
            throw new HttpException('Setor não encontrado', HttpStatus.NOT_FOUND);
        }
        return setor;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateSetorDto: UpdateSetorDto) {
        const setorExiste = await this.setoresService.findOne(+id);
        if (!setorExiste) {
            throw new HttpException('Setor não encontrado', HttpStatus.NOT_FOUND);
        }
        const setor = await this.setoresService.update(+id, updateSetorDto);
        return setor;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const setorExiste = await this.setoresService.findOne(+id);
        if (!setorExiste) {
            throw new HttpException('Setor não encontrado', HttpStatus.NOT_FOUND);
        }
        const setor = await this.setoresService.remove(+id);
        return setor;
    }
}
