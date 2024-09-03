import { Test, TestingModule } from '@nestjs/testing';
import { SetoresController } from './setores.controller';
import { SetoresService } from './setores.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('SetoresController', () => {
    let controller: SetoresController;
    let service: SetoresService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SetoresController],
            providers: [
                {
                    provide: SetoresService,
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

        controller = module.get<SetoresController>(SetoresController);
        service = module.get<SetoresService>(SetoresService);
    });

    it('deve ser definido', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('deve criar um setor', async () => {
            const createSetorDto = { nome: 'Setor 1' };
            const result = { id: 1, nome: 'Setor 1' };

            jest.spyOn(service, 'create').mockResolvedValue(result);

            expect(await controller.create(createSetorDto)).toEqual(result);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os setores', async () => {
            const result = [
                { id: 1, nome: 'Setor 1' },
                { id: 2, nome: 'Setor 2' },
            ];

            jest.spyOn(service, 'findAll').mockResolvedValue(result);

            expect(await controller.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um setor baseado no id', async () => {
            const result = { id: 1, nome: 'Setor 1' };

            jest.spyOn(service, 'findOne').mockResolvedValue(result);

            expect(await controller.findOne('1')).toEqual(result);
        });

        it('deve retornar um erro se o setor não existir', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.findOne('1');
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Setor não encontrado');
            }
        });
    });

    describe('update', () => {
        it('deve atualizar um setor', async () => {
            const updateSetorDto = { nome: 'Setor 2' };
            const result = { id: 1, nome: 'Setor 2' };

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'update').mockResolvedValue(result);

            expect(await controller.update('1', updateSetorDto)).toEqual(result);
        });

        it('deve retornar um erro se o setor não existir', async () => {
            const updateSetorDto = { nome: 'Setor 2' };

            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.update('1', updateSetorDto);
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Setor não encontrado');
            }
        });
    });

    describe('remove', () => {
        it('deve remover um setor', async () => {
            const result = { id: 1, nome: 'Setor 1' };

            jest.spyOn(service, 'findOne').mockResolvedValue(result);
            jest.spyOn(service, 'remove').mockResolvedValue(result);

            expect(await controller.remove('1')).toEqual(result);
        });

        it('deve retornar um erro se o setor não existir', async () => {
            jest.spyOn(service, 'findOne').mockResolvedValue(null);

            try {
                await controller.remove('1');
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.status).toBe(HttpStatus.NOT_FOUND);
                expect(error.message).toBe('Setor não encontrado');
            }
        });
    });
});
