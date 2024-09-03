import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosService } from './veiculos.service';
import { PrismaService } from '@/database/prisma.service';

describe('VeiculosService', () => {
    let service: VeiculosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [VeiculosService, PrismaService],
        }).compile();

        service = module.get<VeiculosService>(VeiculosService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
