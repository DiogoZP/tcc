import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Select, DateInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbX, TbCheck, TbArrowLeft } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import MotoristasService from '@/services/MotoristasService';
import { Setor } from '@/types/Setor';
import { motoristaSchema, MotoristaForm } from '@/types/Motorista';
import MaskedInput from '@/components/MaskedInput';

export default function CriarMotorista() {
    const {
        data: setores,
        error,
        isLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: MotoristasService.criar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Motorista cadastrado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });

            queryClient.invalidateQueries({
                queryKey: ['motoristas'],
            });

            navigate('/admin/motoristas');
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

    const { control } = useForm<MotoristaForm>({
        resolver: zodResolver(motoristaSchema),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !setores) {
        return <div>{error?.message}</div>;
    }

    return (
        <Fieldset legend="Cadastro de Motorista">
            <Form control={control} onSubmit={({ data }) => mutation.mutate(data)}>
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                        <TextInput
                            label="Nome:"
                            placeholder="Nome do motorista"
                            control={control}
                            name="nome"
                            flex={2}
                            miw={200}
                        />
                        <MaskedInput
                            label="CPF:"
                            placeholder="CPF do motorista"
                            control={control}
                            name="cpf"
                            mask="***.***.***-**"
                            flex={2}
                            miw={200}
                        />
                        <TextInput
                            label="RG:"
                            placeholder="RG do motorista"
                            control={control}
                            name="rg"
                            flex={2}
                            miw={200}
                        />
                    </Flex>
                    <Flex gap="sm" wrap={'wrap'}>
                        <Select
                            label="Categoria CNH:"
                            placeholder="Categoria de CNH do motorista"
                            data={['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE']}
                            control={control}
                            name="categoriaCNH"
                            flex={2}
                            miw={200}
                            searchable
                        />
                        <TextInput
                            label="Número da CNH:"
                            placeholder="Número da CNH do motorista"
                            control={control}
                            name="numeroCNH"
                            flex={2}
                            miw={200}
                        />
                        <DateInput
                            label="Validade da CNH:"
                            placeholder="Validade da CNH do motorista"
                            control={control}
                            name="validadeCNH"
                            valueFormat="DD/MM/YYYY"
                            flex={1}
                            miw={200}
                        />
                    </Flex>
                    <Flex gap="sm" wrap={'wrap'}>
                        <MaskedInput
                            label="Telefone:"
                            placeholder="Telefone do motorista"
                            control={control}
                            name="telefone"
                            mask="(**) *********"
                            flex={1}
                            miw={200}
                        />
                        <TextInput
                            label="Endereço:"
                            placeholder="Endereço do motorista"
                            control={control}
                            name="endereco"
                            flex={1}
                            miw={200}
                        />
                        <Select
                            label="Setor:"
                            placeholder="Setor do motorista"
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
                    <Flex justify="space-between" w="100%" mt="sm">
                        <Button
                            onClick={() => navigate('/admin/Motoristas')}
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
