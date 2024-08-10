import { IsString, IsInt, IsIn } from 'class-validator';
export class CreateVeiculoDto {
    @IsString({ message: 'placa deve ser uma string' })
    placa: string;

    @IsString({ message: 'marca deve ser uma string' })
    marca: string;

    @IsString({ message: 'modelo deve ser uma string' })
    modelo: string;

    @IsString({ message: 'tipo deve ser uma string' })
    @IsIn(['Automóvel', 'Motocicleta', 'Van', 'Caminhão', 'Micro-Ônibus', 'Ônibus'], {
        message:
            'tipo deve ser um dos seguintes: Automóvel, Motocicleta, Van, Caminhão, Micro-Ônibus, Ônibus',
    })
    tipo: string;

    @IsInt({ message: 'ano deve ser um número inteiro' })
    ano: number;

    @IsString({ message: 'cor deve ser uma string' })
    cor: string;

    @IsString({ message: 'renavam deve ser uma string' })
    renavam: string;

    @IsString({ message: 'chassi deve ser uma string' })
    chassi: string;

    @IsInt({ message: 'km deve ser um número inteiro' })
    km: number;

    @IsString({ message: 'combustivel deve ser uma string' })
    @IsIn(['Álcool', 'Gasolina', 'Flex', 'Diesel', 'Diesel S10', 'Elétrico'], {
        message:
            'combustivel deve ser um dos seguintes: Álcool, Gasolina, Flex, Diesel, Diesel S10, Elétrico',
    })
    combustivel: string;

    @IsString({ message: 'categoriaCNH deve ser uma string' })
    @IsIn(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'], {
        message: 'categoriaCNH deve ser uma das seguintes: A, B, C, D, E, AB, AC, AD, AE',
    })
    categoriaCNH: string;

    @IsString({ message: 'status deve ser uma string' })
    @IsIn(['Disponível', 'Em Manutenção', 'Em Uso'], {
        message: 'status deve ser um dos seguintes: Disponível, Em Manutenção, Em Uso',
    })
    status: string;

    @IsInt({ message: 'setorId deve ser um número inteiro' })
    setorId: number;
}
