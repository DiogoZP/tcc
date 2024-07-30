import { IsInt, IsString } from 'class-validator';
export class CreateMovimentoDto {
    @IsString({ message: 'dataSaida deve ser uma string' })
    dataSaida: string;

    @IsString({ message: 'dataRetorno deve ser uma string' })
    dataRetorno: string;

    @IsInt({ message: 'kmSaida deve ser um número inteiro' })
    kmSaida: number;

    @IsInt({ message: 'kmRetorno deve ser um número inteiro' })
    kmRetorno: number;

    @IsString({ message: 'itinerario deve ser uma string' })
    itinerario: string;

    @IsInt({ message: 'motoristaId deve ser um número inteiro' })
    motoristaId: number;

    @IsInt({ message: 'veiculoId deve ser um número inteiro' })
    veiculoId: number;
}
