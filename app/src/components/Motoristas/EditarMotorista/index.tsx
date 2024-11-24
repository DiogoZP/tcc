import { useParams } from 'react-router-dom';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DateInput, Select, TextInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbArrowLeft, TbCheck, TbX } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import MotoristasService from '@/services/MotoristasService';
import { Motorista, motoristaSchema, MotoristaForm } from '@/types/Motorista';
import MaskedInput from '@/components/MaskedInput';
import SetoresService from '@/services/SetoresService';
import { Setor } from '@/types/Setor';

export default function EditarMotorista() {
    const { id } = useParams();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const {
        data: motorista,
        error,
        isLoading,
    } = useQuery<Motorista>({
        queryKey: ['motoristas', 'motorista' + id],
        queryFn: () => MotoristasService.buscar(Number(id)),
    });

    const {
        data: setores,
        error: setorError,
        isLoading: setorLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const mutation = useMutation({
        mutationFn: MotoristasService.atualizar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Motorista atualizado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });
            queryClient.invalidateQueries({
                queryKey: ['motoristas', 'motorista' + id],
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

    const { control } = useForm<MotoristaForm>({
        resolver: zodResolver(motoristaSchema),
    });

    if (isLoading || setorLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !motorista || setorError || !setores) {
        return <div>{error?.message}</div>;
    }

    return (
        <Fieldset legend="Editar Motorista">
            <Form control={control} onSubmit={({ data }) => mutation.mutate(data)} onError={(error) => console.log(error)}>
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                    <TextInput
                            label="Id:"
                            placeholder="Id do motorista"
                            control={control}
                            name="id"
                            flex={2}
                            miw={200}
                            defaultValue={motorista.id}
                        />
                        <TextInput
                            label="Nome:"
                            placeholder="Nome do motorista"
                            control={control}
                            name="nome"
                            flex={2}
                            miw={200}
                            defaultValue={motorista.nome}
                        />
                        <MaskedInput
                            label="CPF:"
                            placeholder="CPF do motorista"
                            control={control}
                            name="cpf"
                            mask="***.***.***-**"
                            flex={2}
                            miw={200}
                            defaultValue={motorista.cpf}
                        />
                        <TextInput
                            label="RG:"
                            placeholder="RG do motorista"
                            control={control}
                            name="rg"
                            flex={2}
                            miw={200}
                            defaultValue={motorista.rg}
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
                            defaultValue={motorista.categoriaCNH}
                        />
                        <TextInput
                            label="Número da CNH:"
                            placeholder="Número da CNH do motorista"
                            control={control}
                            name="numeroCNH"
                            flex={2}
                            miw={200}
                            defaultValue={motorista.numeroCNH}
                        />
                        <DateInput
                            label="Validade da CNH:"
                            placeholder="Validade da CNH do motorista"
                            control={control}
                            name="validadeCNH"
                            valueFormat="DD/MM/YYYY"
                            flex={1}
                            miw={200}
                            defaultValue={new Date(motorista.validadeCNH)}
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
                            defaultValue={motorista.telefone}
                        />
                        <TextInput
                            label="Endereço:"
                            placeholder="Endereço do motorista"
                            control={control}
                            name="endereco"
                            flex={1}
                            miw={200}
                            defaultValue={motorista.endereco}
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
                            defaultValue={motorista.setorId.toString()}
                        />
                    </Flex>
                    <Flex justify="space-between" w="100%" mt="sm">
                        <Button
                            onClick={() => navigate(-1)}
                            variant="light"
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
