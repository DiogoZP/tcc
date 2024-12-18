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
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Setores')
@ApiBearerAuth()
@Controller('setores')
export class SetoresController {
    constructor(private readonly setoresService: SetoresService) {}

    @ApiCreatedResponse({ description: 'Setor criado com sucesso' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Post()
    async create(@Body() createSetorDto: CreateSetorDto) {
        const setor = await this.setoresService.create(createSetorDto);
        return setor;
    }

    @ApiOkResponse({ description: 'Setores encontrados' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Get()
    async findAll() {
        const setores = await this.setoresService.findAll();
        return setores;
    }

    @ApiOkResponse({ description: 'Setor encontrado com sucesso' })
    @ApiNotFoundResponse({ description: 'Setor não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const setor = await this.setoresService.findOne(+id);
        if (!setor) {
            throw new HttpException('Setor não encontrado', HttpStatus.NOT_FOUND);
        }
        return setor;
    }

    @ApiOkResponse({ description: 'Setor atualizado com sucesso' })
    @ApiNotFoundResponse({ description: 'Setor não encontrado' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateSetorDto: UpdateSetorDto) {
        const setorExiste = await this.setoresService.findOne(+id);
        if (!setorExiste) {
            throw new HttpException('Setor não encontrado', HttpStatus.NOT_FOUND);
        }
        const setor = await this.setoresService.update(+id, updateSetorDto);
        return setor;
    }

    @ApiOkResponse({ description: 'Setor deletado com sucesso' })
    @ApiNotFoundResponse({ description: 'Setor não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
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
