import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, NumberInput, Select } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbX, TbCheck, TbArrowLeft } from 'react-icons/tb';
import { useQuery, useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import VeiculosService from '@/services/VeiculosService';
import { Setor } from '@/types/Setor';
import { veiculoSchema, VeiculoForm } from '@/types/Veiculo';

export default function CriarVeiculo() {
    const {
        data: setores,
        isError,
        isLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const mutation = useMutation({
        mutationFn: VeiculosService.criar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Veículo cadastrado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });
            navigate('/admin/veiculos');
        },
        onError: (error) => {
            notifications.show({
                title: 'Erro',
                message: error.message,
                color: 'red',
                icon: <TbX size="20" />,
            });
        },
    });

    const navigate = useNavigate();

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
                onSubmit={({ data }) => mutation.mutate(data)}
                onError={(e) => console.log(e)}
            >
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
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
                    <Flex gap="sm" wrap={'wrap'}>
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
                    <Flex gap="sm" wrap={'wrap'}>
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
                    <Flex gap="sm" wrap={'wrap'}>
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
                    <Flex gap="sm" wrap={'wrap'}>
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
                    <Flex justify="space-between" w="100%" mt="sm">
                        <Button
                            onClick={() => navigate('/admin/veiculos')}
                            variant="light"
                            leftSection={<TbArrowLeft size="20" />}
                        >
                            Voltar
                        </Button>
                        <Button type="submit" leftSection={<TbDeviceFloppy size="20" />}>
                            Cadastrar
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        </Fieldset>
    );
}
