import { IsString, IsInt, IsIn } from 'class-validator';

export class CreateMotoristaDto {
    @IsString({ message: 'nome deve ser uma string' })
    nome: string;

    @IsString({ message: 'cpf deve ser uma string' })
    cpf: string;

    @IsString({ message: 'rg deve ser uma string' })
    rg: string;

    @IsString({ message: 'categoriaCNH deve ser uma string' })
    @IsIn(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'], {
        message: 'categoriaCNH deve ser uma das seguintes: A, B, C, D, E, AB, AC, AD, AE',
    })
    categoriaCNH: string;

    @IsString({ message: 'numeroCNH deve ser uma string' })
    numeroCNH: string;

    @IsString({ message: 'validadeCNH deve ser uma string' })
    validadeCNH: string;

    @IsString({ message: 'telefone deve ser uma string' })
    telefone: string;

    @IsInt({ message: 'setorId deve ser um número inteiro' })
    setorId: number;
}
