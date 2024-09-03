import { Test, TestingModule } from '@nestjs/testing';
import { SetoresService } from './setores.service';
import { PrismaService } from '@/database/prisma.service';

describe('SetoresService', () => {
    let service: SetoresService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SetoresService,
                {
                    provide: PrismaService,
                    useValue: {
                        setor: {
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

        service = module.get<SetoresService>(SetoresService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('deve retornar todos os setores', async () => {
            const result = [
                { id: 1, nome: 'Setor 1' },
                { id: 2, nome: 'Setor 2' },
            ];
            jest.spyOn(prisma.setor, 'findMany').mockResolvedValue(result);

            expect(await service.findAll()).toEqual(result);
        });
    });

    describe('findOne', () => {
        it('deve retornar um setor baseado no id', async () => {
            const result = { id: 1, nome: 'Setor 1' };
            jest.spyOn(prisma.setor, 'findUnique').mockResolvedValue(result);

            expect(await service.findOne(1)).toEqual(result);
        });
    });

    describe('create', () => {
        it('deve criar um setor', async () => {
            const createSetorDto = { nome: 'Setor 1' };
            const result = { id: 1, ...createSetorDto };
            jest.spyOn(prisma.setor, 'create').mockResolvedValue(result);

            expect(await service.create(createSetorDto)).toEqual(result);
        });
    });

    describe('update', () => {
        it('deve atualizar um setor', async () => {
            const updateSetorDto = { nome: 'Setor 2' };
            const result = { id: 1, ...updateSetorDto };
            jest.spyOn(prisma.setor, 'update').mockResolvedValue(result);

            expect(await service.update(1, updateSetorDto)).toEqual(result);
        });
    });

    describe('remove', () => {
        it('deve remover um setor', async () => {
            const result = { id: 1, nome: 'Setor 1' };
            jest.spyOn(prisma.setor, 'delete').mockResolvedValue(result);

            expect(await service.remove(1)).toEqual(result);
        });
    });
});
