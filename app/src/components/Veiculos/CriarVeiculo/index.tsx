import { Form, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, NumberInput, Select } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbX } from 'react-icons/tb';
import { useQuery } from '@tanstack/react-query';
import SetoresService from '@/services/SetoresService';
import Setor from '@/types/Setor';

const veiculoSchema = z.object({
    placa: z.string(),
    marca: z.string(),
    modelo: z.string(),
    tipo: z.string(),
    ano: z.number(),
    cor: z.string(),
    renavam: z.string(),
    chassi: z.string(),
    km: z.number(),
    combustivel: z.string(),
    categoriaCNH: z.string(),
    status: z.string(),
    setorId: z.coerce.number(),
});

type VeiculoForm = z.infer<typeof veiculoSchema>;

function CriarVeiculo() {
    const {
        data: setores,
        isError,
        isLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const { control } = useForm<VeiculoForm>({
        resolver: zodResolver(veiculoSchema),
        defaultValues: {
            placa: '',
            marca: '',
            modelo: '',
            tipo: '',
            cor: '',
            renavam: '',
            chassi: '',
            combustivel: '',
            categoriaCNH: '',
            status: '',
        },
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (isError || !setores) {
        return <div>Error</div>;
    }

    return (
        <Fieldset legend="Cadastro de Veículo">
            <Form
                control={control}
                onSubmit={(e) => console.log(e.data)}
                onError={(e) => console.log(e)}
            >
                <Flex gap={10} direction="column">
                    <Flex gap={10} wrap={'wrap'}>
                        <TextInput
                            label="Placa"
                            placeholder="Placa do veículo"
                            control={control}
                            name="placa"
                            flex={1}
                            miw={200}
                        />
                        <TextInput
                            label="Marca"
                            placeholder="Marca do veículo"
                            control={control}
                            name="marca"
                            flex={2}
                            miw={200}
                        />
                        <TextInput
                            label="Modelo"
                            placeholder="Modelo do veículo"
                            control={control}
                            name="modelo"
                            flex={2}
                            miw={200}
                        />
                    </Flex>
                    <Flex gap={10} wrap={'wrap'}>
                        <Select
                            label="Status"
                            placeholder="Status do veículo"
                            data={['Disponível', 'Em Manutenção', 'Em Uso']}
                            control={control}
                            name="status"
                            flex={1}
                            miw={200}
                            searchable
                        />
                        <Select
                            label="Setor"
                            placeholder="Setor do veículo"
                            data={setores.map((setor) => ({
                                value: setor.id.toString(),
                                label: setor.nome,
                            }))}
                            control={control}
                            name="setorId"
                            flex={1}
                            miw={200}
                            searchable
                        />
                    </Flex>
                    <Flex gap={10} wrap={'wrap'}>
                        <Select
                            label="Tipo"
                            placeholder="Tipo do veículo"
                            data={[
                                'Automóvel',
                                'Motocicleta',
                                'Van',
                                'Caminhão',
                                'Micro-Ônibus',
                                'Ônibus',
                            ]}
                            control={control}
                            name="tipo"
                            flex={1}
                            miw={200}
                            searchable
                        />
                        <NumberInput
                            label="Ano"
                            placeholder="Ano do veículo"
                            control={control}
                            name="ano"
                            flex={1}
                            miw={200}
                        />
                        <TextInput
                            label="Cor"
                            placeholder="Cor do veículo"
                            control={control}
                            name="cor"
                            flex={1}
                            miw={200}
                        />
                    </Flex>
                    <Flex gap={10} wrap={'wrap'}>
                        <TextInput
                            label="Renavam"
                            placeholder="Renavam do veículo"
                            control={control}
                            name="renavam"
                            flex={1}
                            miw={200}
                        />
                        <TextInput
                            label="Chassi"
                            placeholder="Chassi do veículo"
                            control={control}
                            name="chassi"
                            flex={1}
                            miw={200}
                        />
                    </Flex>
                    <Flex gap={10} wrap={'wrap'}>
                        <NumberInput
                            label="Km"
                            placeholder="Km do veículo"
                            control={control}
                            name="km"
                            flex={1}
                            miw={200}
                        />
                        <Select
                            label="Combustível"
                            placeholder="Combustível do veículo"
                            data={[
                                'Álcool',
                                'Gasolina',
                                'Flex',
                                'Diesel',
                                'Diesel S10',
                                'Elétrico',
                            ]}
                            control={control}
                            name="combustivel"
                            flex={1}
                            miw={200}
                            searchable
                        />
                        <Select
                            label="Categoria CNH"
                            placeholder="Categoria CNH do veículo"
                            data={['A', 'B', 'C', 'D', 'E']}
                            control={control}
                            name="categoriaCNH"
                            flex={1}
                            miw={200}
                            searchable
                        />
                    </Flex>
                    <Flex justify="space-between" w="100%" mt={10}>
                        <Button color='red' leftSection={<TbX size='20' />}>Cancelar</Button>
                        <Button type="submit" leftSection={<TbDeviceFloppy size="20" />}>
                            Cadastrar
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        </Fieldset>
    );
}

export default CriarVeiculo;
