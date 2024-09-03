import { Test, TestingModule } from '@nestjs/testing';
import { MovimentosService } from './movimentos.service';
import { PrismaService } from '@/database/prisma.service';

describe('MovimentosService', () => {
    let service: MovimentosService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MovimentosService,
                {
                    provide: PrismaService,
                    useValue: {
                        movimento: {
                            create: jest.fn(),
                            findMany: jest.fn(),
                            findUnique: jest.fn(),
                            delete: jest.fn(),
                            update: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        service = module.get<MovimentosService>(MovimentosService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('deve criar um movimento', async () => {
            const createMovimentoDto = {
                dataSaida: '2021-12-31',
                dataRetorno: '2021-12-31',
                kmSaida: 100,
                kmRetorno: 200,
                itinerario: 'Campinas',
                motoristaId: 1,
                veiculoId: 1,
            };

            const result = { id: 1, ...createMovimentoDto };

            jest.spyOn(prisma.movimento, 'create').mockResolvedValue(result);

            expect(await service.create(createMovimentoDto)).toEqual(result);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os movimentos', async () => {
            const result = [
                {
                    id: 1,
                    dataSaida: '2021-12-31',
                    dataRetorno: '2021-12-31',
                    kmSaida: 100,
                    kmRetorno: 200,
                    itinerario: 'Campinas',
                    motoristaId: 1,
                    veiculoId: 1,
                },
            ];

            jest.spyOn(prisma.movimento, 'findMany').mockResolvedValue(result);

            expect(await service.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um movimento baseado no id', async () => {
            const result = {
                id: 1,
                dataSaida: '2021-12-31',
                dataRetorno: '2021-12-31',
                kmSaida: 100,
                kmRetorno: 200,
                itinerario: 'Campinas',
                motoristaId: 1,
                veiculoId: 1,
            };

            jest.spyOn(prisma.movimento, 'findUnique').mockResolvedValue(result);

            expect(await service.findOne(1)).toEqual(result);
        });
    });

    describe('update', () => {
        it('deve atualizar um movimento baseado no id', async () => {
            const updateMovimentoDto = {
                dataSaida: '2021-12-31',
                dataRetorno: '2021-12-31',
                kmSaida: 100,
                kmRetorno: 200,
                itinerario: 'Campinas',
                motoristaId: 1,
                veiculoId: 1,
            };

            const result = { id: 1, ...updateMovimentoDto };

            jest.spyOn(prisma.movimento, 'update').mockResolvedValue(result);

            expect(await service.update(1, updateMovimentoDto)).toEqual(result);
        });
    });

    describe('remove', () => {
        it('deve deletar um movimento baseado no id', async () => {
            const result = {
                id: 1,
                dataSaida: '2021-12-31',
                dataRetorno: '2021-12-31',
                kmSaida: 100,
                kmRetorno: 200,
                itinerario: 'Campinas',
                motoristaId: 1,
                veiculoId: 1,
            };

            jest.spyOn(prisma.movimento, 'delete').mockResolvedValue(result);

            expect(await service.remove(1)).toEqual(result);
        });
    });
});
