import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosService } from './veiculos.service';
import { PrismaService } from '@/database/prisma.service';

describe('VeiculosService', () => {
    let service: VeiculosService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                VeiculosService,
                {
                    provide: PrismaService,
                    useValue: {
                        veiculo: {
                            findMany: jest.fn(),
                            findUnique: jest.fn(),
                            create: jest.fn(),
                            update: jest.fn(),
                            delete: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        service = module.get<VeiculosService>(VeiculosService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('deve retornar todos os veiculos', async () => {
            const result = [
                {
                    id: 1,
                    placa: 'ABC1234',
                    marca: 'Fiat',
                    modelo: 'Uno',
                    tipo: 'Passeio',
                    ano: 2020,
                    cor: 'Branco',
                    renavam: '123456789',
                    chassi: '123456789',
                    km: 10000,
                    combustivel: 'Gasolina',
                    categoriaCNH: 'B',
                    status: 'Disponível',
                    setorId: 1,
                },
                {
                    id: 2,
                    placa: 'DEF5678',
                    marca: 'Volkswagen',
                    modelo: 'Gol',
                    tipo: 'Passeio',
                    ano: 2021,
                    cor: 'Preto',
                    renavam: '987654321',
                    chassi: '987654321',
                    km: 20000,
                    combustivel: 'Gasolina',
                    categoriaCNH: 'B',
                    status: 'Disponível',
                    setorId: 2,
                },
            ];
            jest.spyOn(prisma.veiculo, 'findMany').mockResolvedValue(result);

            expect(await service.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um veiculo baseado no id', async () => {
            const result = {
                id: 1,
                placa: 'ABC1234',
                marca: 'Fiat',
                modelo: 'Uno',
                tipo: 'Passeio',
                ano: 2020,
                cor: 'Branco',
                renavam: '123456789',
                chassi: '123456789',
                km: 10000,
                combustivel: 'Gasolina',
                categoriaCNH: 'B',
                status: 'Disponível',
                setorId: 1,
            };
            jest.spyOn(prisma.veiculo, 'findUnique').mockResolvedValue(result);

            expect(await service.findOne(1)).toEqual(result);
        });
    });

    describe('create', () => {
        it('deve criar um veiculo', async () => {
            const veiculo = {
                id: 1,
                placa: 'ABC1234',
                marca: 'Fiat',
                modelo: 'Uno',
                tipo: 'Passeio',
                ano: 2020,
                cor: 'Branco',
                renavam: '123456789',
                chassi: '123456789',
                km: 10000,
                combustivel: 'Gasolina',
                categoriaCNH: 'B',
                status: 'Disponível',
                setorId: 1,
            };
            jest.spyOn(prisma.veiculo, 'create').mockResolvedValue(veiculo);

            expect(await service.create(veiculo)).toEqual(veiculo);
        });
    });

    describe('update', () => {
        it('deve atualizar um veiculo', async () => {
            const veiculo = {
                id: 1,
                placa: 'ABC1234',
                marca: 'Fiat',
                modelo: 'Uno',
                tipo: 'Passeio',
                ano: 2020,
                cor: 'Branco',
                renavam: '123456789',
                chassi: '123456789',
                km: 10000,
                combustivel: 'Gasolina',
                categoriaCNH: 'B',
                status: 'Disponível',
                setorId: 1,
            };
            jest.spyOn(prisma.veiculo, 'update').mockResolvedValue(veiculo);

            expect(await service.update(1, veiculo)).toEqual(veiculo);
        });
    });

    describe('remove', () => {
        it('deve remover um veiculo', async () => {
            const result = {
                id: 1,
                placa: 'ABC1234',
                marca: 'Fiat',
                modelo: 'Uno',
                tipo: 'Passeio',
                ano: 2020,
                cor: 'Branco',
                renavam: '123456789',
                chassi: '123456789',
                km: 10000,
                combustivel: 'Gasolina',
                categoriaCNH: 'B',
                status: 'Disponível',
                setorId: 1,
            };
            jest.spyOn(prisma.veiculo, 'delete').mockResolvedValue(result);

            expect(await service.remove(1)).toEqual(result);
        });
    });
});
