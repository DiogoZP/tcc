import { useParams } from 'react-router-dom';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbArrowLeft, TbCheck, TbX } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import { Setor, setorSchema, SetorForm } from '@/types/Setor';

export default function EditarSetor() {
    const { id } = useParams();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const {
        data: setor,
        isError: isError,
        isLoading: isLoading,
    } = useQuery<Setor>({
        queryKey: ['setores', 'setor' + id],
        queryFn: () => SetoresService.buscar(Number(id)),
    });

    const mutation = useMutation({
        mutationFn: SetoresService.atualizar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Setor atualizado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });
            queryClient.invalidateQueries({
                queryKey: ['setores', 'setor' + id],
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

    const { control } = useForm<SetorForm>({
        resolver: zodResolver(setorSchema),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (isError || !setor) {
        return <div>Erro ao buscar setor</div>;
    }

    return (
        <Fieldset legend="Editar Setor">
            <Form onSubmit={({ data }) => mutation.mutate(data)} control={control}>
            <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                        <TextInput
                            label="ID"
                            placeholder="ID do setor"
                            control={control}
                            name="id"
                            flex={1}
                            miw="sm"
                            defaultValue={setor.id.toString()}
                            readOnly
                        />
                        <TextInput
                            label="Nome"
                            placeholder="Nome do setor"
                            control={control}
                            name="nome"
                            flex={2}
                            miw={200}
                            defaultValue={setor.nome}
                        />
                    </Flex>
                    <Flex justify="space-between" w="100%" mt="sm">
                        <Button
                            onClick={() => navigate(-1)}
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
