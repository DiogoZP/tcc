import { Test, TestingModule } from '@nestjs/testing';
import { UploadsService } from './uploads.service';
import { PrismaService } from '@/database/prisma.service';

describe('UploadsService', () => {
    let service: UploadsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UploadsService, PrismaService],
        }).compile();

        service = module.get<UploadsService>(UploadsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
