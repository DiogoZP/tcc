import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosController } from './veiculos.controller';
import { VeiculosService } from './veiculos.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('VeiculosController', () => {
    let controller: VeiculosController;
    let service: VeiculosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VeiculosController],
            providers: [
                {
                    provide: VeiculosService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        update: jest.fn(),
                        remove: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<VeiculosController>(VeiculosController);
        service = module.get<VeiculosService>(VeiculosService);
    });

    it('deve ser definido', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('deve criar um veículo', async () => {
            const createVeiculoDto = {
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

            jest.spyOn(service, 'create').mockResolvedValue(result);

            expect(await controller.create(createVeiculoDto)).toEqual(result);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os veículos', async () => {
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
                    setor: {
                        nome: 'Setor 1',
                    },
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
                    setorId: 1,
                    setor: {
                        nome: 'Setor 1',
                    },
                },
            ];

            jest.spyOn(service, 'findAll').mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um veículo baseado no id', async () => {
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
                setor: {
                    nome: 'Setor 1',
                },
            };

            jest.spyOn(service, 'findOne').mockResolvedValue(result);

            expect(await controller.findOne('1')).toEqual(result);
        });

        it('deve retornar um erro se o veículo não existir', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.findOne('1');
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Veículo não encontrado');
            }
        });
    });

    describe('update', () => {
        it('deve atualizar um veículo', async () => {
            const updateVeiculoDto = {
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

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'update').mockResolvedValue(result);

            expect(await controller.update('1', updateVeiculoDto)).toEqual(result);
        });

        it('deve retornar um erro se o veículo não existir', async () => {
            const updateVeiculoDto = {
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

            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.update('1', updateVeiculoDto);
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Veículo não encontrado');
            }
        });
    });

    describe('remove', () => {
        it('deve remover um veículo', async () => {
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

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'remove').mockResolvedValue(result);

            expect(await controller.remove('1')).toEqual(result);
        });

        it('deve retornar um erro se o veículo não existir', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.remove('1');
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Veículo não encontrado');
            }
        });
    });
});
