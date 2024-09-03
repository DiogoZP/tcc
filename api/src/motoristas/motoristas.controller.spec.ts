import { Test, TestingModule } from '@nestjs/testing';
import { MotoristasController } from './motoristas.controller';
import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('MotoristasController', () => {
    let controller: MotoristasController;
    let service: MotoristasService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MotoristasController],
            providers: [
                {
                    provide: MotoristasService,
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

        controller = module.get<MotoristasController>(MotoristasController);
        service = module.get<MotoristasService>(MotoristasService);
    });

    it('deve ser definido', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('deve criar um motorista', async () => {
            const createMotoristaDto: CreateMotoristaDto = {
                nome: 'Fulano',
                cpf: '12345678901',
                rg: '123456789',
                categoriaCNH: 'B',
                numeroCNH: '1234567890',
                validadeCNH: '2025-12-31',
                telefone: '11987654321',
                setorId: 1,
            };
            const result = { id: 1, ...createMotoristaDto };
            jest.spyOn(service, 'create').mockResolvedValue(result);

            expect(await controller.create(createMotoristaDto)).toEqual(result);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os motoristas', async () => {
            const result = [
                {
                    id: 1,
                    nome: 'Fulano',
                    cpf: '12345678901',
                    rg: '123456789',
                    categoriaCNH: 'B',
                    numeroCNH: '1234567890',
                    validadeCNH: '2025-12-31',
                    telefone: '11987654321',
                    setorId: 1,
                },
            ];
            jest.spyOn(service, 'findAll').mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um motorista baseado no id', async () => {
            const result = {
                id: 1,
                nome: 'Fulano',
                cpf: '12345678901',
                rg: '123456789',
                categoriaCNH: 'B',
                numeroCNH: '1234567890',
                validadeCNH: '2025-12-31',
                telefone: '11987654321',
                setorId: 1,
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(result);

            expect(await controller.findOne('1')).toEqual(result);
        });

        it('deve retornar um erro se o motorista não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.findOne('1');
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.getResponse()).toEqual('Motorista não encontrado');
                expect(e.getStatus()).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });

    describe('update', () => {
        it('deve atualizar um motorista', async () => {
            const updateMotoristaDto: UpdateMotoristaDto = { nome: 'Fulano de Tal' };
            const result = {
                id: 1,
                nome: 'Fulano de Tal',
                cpf: '12345678901',
                rg: '123456789',
                categoriaCNH: 'B',
                numeroCNH: '1234567890',
                validadeCNH: '2025-12-31',
                telefone: '11987654321',
                setorId: 1,
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'update').mockResolvedValue(result);

            expect(await controller.update('1', updateMotoristaDto)).toEqual(result);
        });

        it('deve retornar um erro se o motorista não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.update('1', {});
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.getResponse()).toEqual('Motorista não encontrado');
                expect(e.getStatus()).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });

    describe('remove', () => {
        it('deve remover um motorista', async () => {
            const result = {
                id: 1,
                nome: 'Fulano',
                cpf: '12345678901',
                rg: '123456789',
                categoriaCNH: 'B',
                numeroCNH: '1234567890',
                validadeCNH: '2025-12-31',
                telefone: '11987654321',
                setorId: 1,
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'remove').mockResolvedValue(result);

            expect(await controller.remove('1')).toEqual(result);
        });

        it('deve retornar um erro se o motorista não for encontrado', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.remove('1');
            } catch (e) {
                expect(e).toBeInstanceOf(HttpException);
                expect(e.getResponse()).toEqual('Motorista não encontrado');
                expect(e.getStatus()).toBe(HttpStatus.NOT_FOUND);
            }
        });
    });
});
