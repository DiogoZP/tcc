import { IsInt, IsString } from 'class-validator';
export class CreateMovimentoDto {
    @IsString()
    dataSaida: string;

    @IsString()
    dataRetorno: string;

    @IsInt()
    kmSaida: number;

    @IsInt()
    kmRetorno: number;

    @IsString()
    itinerario: string;

    @IsInt()
    motoristaId: number;

    @IsInt()
    veiculoId: number;
}
