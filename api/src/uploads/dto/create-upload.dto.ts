import { IsInt, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
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

    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
}
