import { IsInt, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateUploadDto {
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    motoristaId?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    veiculoId?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    itemId?: number;
}
