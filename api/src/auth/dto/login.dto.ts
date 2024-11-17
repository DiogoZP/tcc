import { IsString } from 'class-validator';

export class LoginDto {
    @IsString({ message: 'email deve ser uma string' })
    email: string;

    @IsString({ message: 'senha deve ser uma string' })
    senha: string;
}
