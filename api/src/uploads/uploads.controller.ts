import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpException,
    HttpStatus,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { join } from 'path';
import { unlink } from 'fs';

@Controller('uploads')
export class UploadsController {
    constructor(private readonly uploadsService: UploadsService) {}

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './arquivos',
                filename: (_req, file, cb) => {
                    cb(null, file.originalname + '-' + Date.now());
                },
            }),
            limits: { fileSize: 1024 * 1024 * 10 },
        }),
    )
    async create(
        @Body() createUploadDto: CreateUploadDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (!file) {
            throw new HttpException('Arquivo não enviado', HttpStatus.BAD_REQUEST);
        }
        const upload = await this.uploadsService.create(createUploadDto, file.filename);
        return upload;
    }

    @Get()
    async findAll() {
        const uploads = await this.uploadsService.findAll();
        return uploads;
    }

    @Get(':id')
    async findOne(@Param('id') id: string, res: Response) {
        const upload = await this.uploadsService.findOne(+id);
        if (!upload) {
            throw new HttpException('Upload não encontrado', HttpStatus.NOT_FOUND);
        }
        res.sendFile(join('./arquivos', upload.filename));
    }

    @Patch(':id')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './arquivos',
                filename: (_req, file, cb) => {
                    cb(null, file.originalname + '-' + Date.now());
                },
            }),
            limits: { fileSize: 1024 * 1024 * 10 },
        }),
    )
    async update(
        @Param('id') id: string,
        @Body() updateUploadDto: UpdateUploadDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const uploadExiste = await this.uploadsService.findOne(+id);
        if (!uploadExiste) {
            throw new HttpException('Upload não encontrado', HttpStatus.NOT_FOUND);
        }
        if (!file) {
            throw new HttpException('Arquivo não enviado', HttpStatus.BAD_REQUEST);
        }
        const upload = await this.uploadsService.update(+id, updateUploadDto, file.filename);
        return upload;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const uploadExiste = await this.uploadsService.findOne(+id);
        if (!uploadExiste) {
            throw new HttpException('Upload não encontrado', HttpStatus.NOT_FOUND);
        }
        const upload = await this.uploadsService.remove(+id);
        unlink(join('./arquivos', upload.filename), () => {
            throw new HttpException('Erro ao deletar o arquivo', HttpStatus.INTERNAL_SERVER_ERROR);
        });
        return upload;
    }
}
