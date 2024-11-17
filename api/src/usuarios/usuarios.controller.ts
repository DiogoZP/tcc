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
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Usuarios')
@ApiBearerAuth()
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @ApiCreatedResponse({ description: 'Usuario criado com sucesso' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto) {
        const { senha, ...usuario } = await this.usuariosService.create(createUsuarioDto);
        return usuario;
    }

    @ApiOkResponse({ description: 'Usuarios encontrados' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Get()
    async findAll() {
        const usuarios = await this.usuariosService.findAll();
        return usuarios;
    }

    @ApiOkResponse({ description: 'Usuario encontrado com sucesso' })
    @ApiNotFoundResponse({ description: 'Usuario não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const usuario = await this.usuariosService.findOne({ id: +id });
        if (!usuario) {
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
        }

        const { senha, ...result } = usuario;
        return result;
    }

    @ApiOkResponse({ description: 'Usuario atualizado com sucesso' })
    @ApiNotFoundResponse({ description: 'Usuario não encontrado' })
    @ApiBadRequestResponse({ description: 'Valores inválidos' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
        const usuarioExiste = await this.usuariosService.findOne({ id: +id });
        if (!usuarioExiste) {
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
        }
        const { senha, ...usuario } = await this.usuariosService.update(+id, updateUsuarioDto);
        return usuario;
    }

    @ApiOkResponse({ description: 'Usuario deletado com sucesso' })
    @ApiNotFoundResponse({ description: 'Usuario não encontrado' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const usuarioExiste = await this.usuariosService.findOne({ id: +id });
        if (!usuarioExiste) {
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
        }
        const { senha, ...usuario } = await this.usuariosService.remove(+id);
        return usuario;
    }
}
