import { IsString, IsInt, IsIn } from 'class-validator';
export class CreateMotoristaDto {
    @IsString()
    nome: string;

    @IsString()
    cpf: string;

    @IsString()
    rg: string;

    @IsString()
    @IsIn(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'])
    categoriaCNH: string;

    @IsString()
    numeroCNH: string;

    @IsString()
    validadeCNH: string;

    @IsString()
    telefone: string;

    @IsInt()
    setorId: number;
}
