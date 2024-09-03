import { Test, TestingModule } from '@nestjs/testing';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { PrismaService } from '@/database/prisma.service';

describe('UploadsController', () => {
    let controller: UploadsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UploadsController],
            providers: [UploadsService, PrismaService],
        }).compile();

        controller = module.get<UploadsController>(UploadsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
