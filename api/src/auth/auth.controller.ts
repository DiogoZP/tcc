import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Public } from './public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOkResponse({ description: 'Login realizado com sucesso' })
    @HttpCode(200)
    @Public()
    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        const token = await this.authService.login(loginDto.email, loginDto.senha);
        return token;
    }

    @ApiOkResponse({ description: 'Autenticação válida' })
    @ApiUnauthorizedResponse({ description: 'Autenticação inválida' })
    @HttpCode(200)
    @Get('/validate')
    async validate() {
        return true;
    }
}
