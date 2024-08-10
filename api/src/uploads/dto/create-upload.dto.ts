import { IsInt, IsOptional } from 'class-validator';
export class CreateUploadDto {
    @IsOptional()
    @IsInt()
    motoristaId?: number;

    @IsOptional()
    @IsInt()
    veiculoId?: number;

    @IsOptional()
    @IsInt()
    itemId?: number;
}
