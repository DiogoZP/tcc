import { useParams } from 'react-router-dom';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput, Select, TextInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbArrowLeft, TbCheck, TbX } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import UsuariosService from '@/services/UsuariosService';
import { Usuario, usuarioSchema, UsuarioForm } from '@/types/Usuario';
import SetoresService from '@/services/SetoresService';
import { Setor } from '@/types/Setor';

export default function EditarUsuario() {
    const { id } = useParams();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const {
        data: usuario,
        error,
        isLoading,
    } = useQuery<Usuario>({
        queryKey: ['usuarios', 'usuario' + id],
        queryFn: () => UsuariosService.buscar(Number(id)),
    });

    const {
        data: setores,
        error: setorError,
        isLoading: setorLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const mutation = useMutation({
        mutationFn: UsuariosService.atualizar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Usuario atualizado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });
            queryClient.invalidateQueries({
                queryKey: ['usuarios', 'usuario' + id],
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

    const { control } = useForm<UsuarioForm>({
        resolver: zodResolver(usuarioSchema),
    });

    if (isLoading || setorLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !usuario || setorError || !setores) {
        return <div>{error?.message}</div>;
    }

    return (
        <Fieldset legend="Editar Usuario">
            <Form control={control} onSubmit={({ data }) => mutation.mutate(data)} onError={(error) => console.log(error)}>
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                    <TextInput
                            label="Id:"
                            placeholder="Id do usuário"
                            control={control}
                            name="id"
                            flex={2}
                            miw={200}
                            defaultValue={usuario.id}
                            readOnly
                        />
                        <TextInput
                            label="Nome:"
                            placeholder="Nome do usuário"
                            control={control}
                            name="nome"
                            defaultValue={usuario.nome}
                            flex={1}
                            miw={200}
                        />
                        <Select
                            label="Setor:"
                            placeholder="Setor do usuário"
                            data={setores.map((setor) => ({
                                value: setor.id.toString(),
                                label: setor.nome,
                            }))}
                            control={control}
                            name="setorId"
                            defaultValue={usuario.setorId.toString()}
                            flex={1}
                            miw={200}
                            searchable
                        />
                    </Flex>
                    <Flex gap="sm" wrap={'wrap'}>
                    <TextInput
                            label="Email:"
                            placeholder="Email do usuário"
                            control={control}
                            name="email"
                            defaultValue={usuario.email}
                            flex={1}
                            miw={200}
                        />
                        <PasswordInput
                            label="Senha:"
                            placeholder="Senha do usuário"
                            control={control}
                            name="senha"
                            flex={1}
                            miw={200}
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
