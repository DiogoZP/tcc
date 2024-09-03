import { Test, TestingModule } from '@nestjs/testing';
import { MovimentosController } from './movimentos.controller';
import { MovimentosService } from './movimentos.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('MovimentosController', () => {
    let controller: MovimentosController;
    let service: MovimentosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MovimentosController],
            providers: [
                {
                    provide: MovimentosService,
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

        controller = module.get<MovimentosController>(MovimentosController);
        service = module.get<MovimentosService>(MovimentosService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
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

            jest.spyOn(service, 'create').mockResolvedValue(result);

            expect(await controller.create(createMovimentoDto)).toEqual(result);
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

            jest.spyOn(service, 'findAll').mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
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

            jest.spyOn(service, 'findOne').mockResolvedValue(result);

            expect(await controller.findOne('1')).toEqual(result);
        });

        it('deve retornar um erro se o movimento não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.findOne('1');
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.message).toBe('Movimento não encontrado');
                expect(e.status).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });

    describe('update', () => {
        it('deve atualizar um movimento', async () => {
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

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'update').mockResolvedValue(result);

            expect(await controller.update('1', updateMovimentoDto)).toEqual(result);
        });

        it('deve retornar um erro se o movimento não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.update('1', {});
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.message).toBe('Movimento não encontrado');
                expect(e.status).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });

    describe('remove', () => {
        it('deve remover um movimento', async () => {
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

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'remove').mockResolvedValue(result);

            expect(await controller.remove('1')).toEqual(result);
        });

        it('deve retornar um erro se o movimento não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.remove('1');
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.message).toBe('Movimento não encontrado');
                expect(e.status).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });
});
