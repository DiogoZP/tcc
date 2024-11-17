import { IsInt, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsString({ message: 'nome deve ser uma string' })
    nome: string;

    @IsString({ message: 'email deve ser uma string' })
    email: string;

    @IsString({ message: 'senha deve ser uma string' })
    senha: string;

    @IsInt({ message: 'setorId deve ser um inteiro' })
    setorId: number;
}
