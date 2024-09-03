import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosController } from './veiculos.controller';
import { VeiculosService } from './veiculos.service';
import { PrismaService } from '@/database/prisma.service';

describe('VeiculosController', () => {
    let controller: VeiculosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VeiculosController],
            providers: [VeiculosService, PrismaService],
        }).compile();

        controller = module.get<VeiculosController>(VeiculosController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
