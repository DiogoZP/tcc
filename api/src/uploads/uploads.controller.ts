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
    Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { unlink } from 'fs';
import { resolve } from 'path';

@Controller('uploads')
export class UploadsController {
    constructor(private readonly uploadsService: UploadsService) {}

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: resolve(__dirname, '..', '..', 'arquivos'),
                filename: (_req, file, cb) => {
                    cb(null, Date.now() + '-' + file.originalname);
                },
            }),
            limits: { fileSize: 1024 * 1024 * 10 },
        }),
    )
    async create(
        @Body() createUploadDto: CreateUploadDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const upload = await this.uploadsService.create(
            createUploadDto,
            file.filename,
            file.mimetype,
        );
        return upload;
    }

    @Get()
    async findAll() {
        const uploads = await this.uploadsService.findAll();
        return uploads;
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response) {
        const upload = await this.uploadsService.findOne(+id);
        if (!upload) {
            throw new HttpException('Upload não encontrado', HttpStatus.NOT_FOUND);
        }
        res.setHeader('Content-Type', upload.mimetype);
        res.sendFile(resolve(__dirname, '..', '..', 'arquivos', upload.filename));
    }

    @Patch(':id')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: resolve(__dirname, '..', '..', 'arquivos'),
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

        if (file) {
            unlink(resolve(__dirname, '..', '..', 'arquivos', uploadExiste.filename), (error) => {
                if (error) {
                    throw new HttpException(
                        'Erro ao atualizar o arquivo: ' + error.message,
                        HttpStatus.INTERNAL_SERVER_ERROR,
                    );
                }
            });
        }

        const upload = await this.uploadsService.update(
            +id,
            updateUploadDto,
            file?.filename,
            file?.mimetype,
        );
        return upload;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const uploadExiste = await this.uploadsService.findOne(+id);
        if (!uploadExiste) {
            throw new HttpException('Upload não encontrado', HttpStatus.NOT_FOUND);
        }
        const upload = await this.uploadsService.remove(+id);
        unlink(resolve(__dirname, '..', '..', 'arquivos'), (error) => {
            if (error) {
                throw new HttpException(
                    'Erro ao deletar o arquivo: ' + error.message,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        });
        return upload;
    }
}
