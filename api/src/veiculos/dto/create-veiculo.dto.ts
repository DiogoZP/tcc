import { IsString, IsInt, IsIn } from 'class-validator';
export class CreateVeiculoDto {
    @IsString()
    placa: string;

    @IsString()
    marca: string;

    @IsString()
    modelo: string;

    @IsInt()
    ano: number;

    @IsString()
    cor: string;

    @IsString()
    renavam: string;

    @IsString()
    chassi: string;

    @IsInt()
    km: number;

    @IsString()
    @IsIn(['Álcool', 'Gasolina', 'Flex', 'Diesel', 'Diesel S10', 'Elétrico'])
    combustivel: string;

    @IsString()
    @IsIn(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'])
    categoriaCNH: string;

    @IsString()
    @IsIn(['Disponível', 'Em Manutenção', 'Em Uso'])
    status: string;

    @IsInt()
    setorId: number;
}
