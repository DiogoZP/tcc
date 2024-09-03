import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/database/prisma.service';
import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';

describe('MotoristasService', () => {
    let service: MotoristasService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MotoristasService,
                {
                    provide: PrismaService,
                    useValue: {
                        motorista: {
                            create: jest.fn(),
                            findMany: jest.fn(),
                            findUnique: jest.fn(),
                            update: jest.fn(),
                            delete: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        service = module.get<MotoristasService>(MotoristasService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
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
            jest.spyOn(prisma.motorista, 'create').mockResolvedValue(result);

            expect(await service.create(createMotoristaDto)).toEqual(result);
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
            jest.spyOn(prisma.motorista, 'findMany').mockResolvedValue(result);

            expect(await service.findAll()).toEqual(result);
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
            jest.spyOn(prisma.motorista, 'findUnique').mockResolvedValue(result);

            expect(await service.findOne(1)).toEqual(result);
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
            jest.spyOn(prisma.motorista, 'update').mockResolvedValue(result);

            expect(await service.update(1, updateMotoristaDto)).toEqual(result);
        });
    });

    describe('remove', () => {
        it('deve deletar um motorista', async () => {
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
            jest.spyOn(prisma.motorista, 'delete').mockResolvedValue(result);

            expect(await service.remove(1)).toEqual(result);
        });
    });
});
