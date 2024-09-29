import { useParams } from 'react-router-dom';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, NumberInput, Select } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbArrowLeft, TbCheck, TbX } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import VeiculosService from '@/services/VeiculosService';
import { Setor } from '@/types/Setor';
import { Veiculo, veiculoSchema, VeiculoForm } from '@/types/Veiculo';

function EditarVeiculo() {
    const { id } = useParams();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const {
        data: veiculo,
        isError: isVeiculoError,
        isLoading: isVeiculoLoading,
    } = useQuery<Veiculo>({
        queryKey: ['veiculos', id],
        queryFn: () => VeiculosService.buscar(Number(id)),
    });

    const {
        data: setores,
        isError: isSetoresError,
        isLoading: isSetoresLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const mutation = useMutation({
        mutationFn: VeiculosService.atualizar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Veículo atualizado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });
            queryClient.invalidateQueries({
                queryKey: ['veiculos', id],
            });
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

    const { control } = useForm<VeiculoForm>({
        resolver: zodResolver(veiculoSchema),
    });

    if (isVeiculoLoading || isSetoresLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (isVeiculoError || isSetoresError || !veiculo || !setores) {
        return <div>Erro ao buscar veículo</div>;
    }

    return (
        <Fieldset legend="Editar Veículo">
            <Form onSubmit={({ data }) => mutation.mutate(data)} control={control}>
            <Flex gap={10} direction="column">
                    <Flex gap={10} wrap={'wrap'}>
                        <TextInput
                            label="ID"
                            placeholder="ID do veículo"
                            control={control}
                            name="id"
                            flex={1}
                            miw={10}
                            defaultValue={veiculo.id.toString()}
                            readOnly
                        />
                        <TextInput
                            label="Placa"
                            placeholder="Placa do veículo"
                            control={control}
                            name="placa"
                            flex={2}
                            miw={200}
                            defaultValue={veiculo.placa}
                        />
                        <TextInput
                            label="Marca"
                            placeholder="Marca do veículo"
                            control={control}
                            name="marca"
                            flex={3}
                            miw={200}
                            defaultValue={veiculo.marca}
                        />
                        <TextInput
                            label="Modelo"
                            placeholder="Modelo do veículo"
                            control={control}
                            name="modelo"
                            flex={3}
                            miw={200}
                            defaultValue={veiculo.modelo}
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
                            defaultValue={veiculo.status}
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
                            defaultValue={veiculo.setorId.toString()}
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
                            defaultValue={veiculo.tipo}
                        />
                        <NumberInput
                            label="Ano"
                            placeholder="Ano do veículo"
                            control={control}
                            name="ano"
                            flex={1}
                            miw={200}
                            defaultValue={veiculo.ano}
                        />
                        <TextInput
                            label="Cor"
                            placeholder="Cor do veículo"
                            control={control}
                            name="cor"
                            flex={1}
                            miw={200}
                            defaultValue={veiculo.cor}
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
                            defaultValue={veiculo.renavam}
                        />
                        <TextInput
                            label="Chassi"
                            placeholder="Chassi do veículo"
                            control={control}
                            name="chassi"
                            flex={1}
                            miw={200}
                            defaultValue={veiculo.chassi}
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
                            defaultValue={veiculo.km}
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
                            defaultValue={veiculo.combustivel}
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
                            defaultValue={veiculo.categoriaCNH}
                        />
                    </Flex>
                    <Flex justify="space-between" w="100%" mt={10}>
                        <Button
                            onClick={() => navigate('/admin/veiculos')}
                            variant='light'
                            leftSection={<TbArrowLeft size="20" />}
                        >
                            Voltar
                        </Button>
                        <Button type="submit" leftSection={<TbDeviceFloppy size="20" />}>
                            Salvar
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        </Fieldset>
    );
}

export default EditarVeiculo;
