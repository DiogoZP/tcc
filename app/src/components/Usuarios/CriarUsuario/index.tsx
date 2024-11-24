import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput, Select, TextInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex, Loader } from '@mantine/core';
import { TbDeviceFloppy, TbX, TbCheck, TbArrowLeft } from 'react-icons/tb';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import UsuariosService from '@/services/UsuariosService';
import { usuarioSchema, UsuarioForm } from '@/types/Usuario';
import { Setor } from '@/types/Setor';
import SetoresService from '@/services/SetoresService';

export default function CriarUsuario() {
    const queryClient = useQueryClient();

    const {
        data: setores,
        error,
        isLoading,
    } = useQuery<Setor[]>({ queryKey: ['setores'], queryFn: SetoresService.listar });

    const mutation = useMutation({
        mutationFn: UsuariosService.criar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Usuario cadastrado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });

            queryClient.invalidateQueries({
                queryKey: ['usuarios'],
            });

            navigate('/admin/usuarios');
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

    const { control } = useForm<UsuarioForm>({
        resolver: zodResolver(usuarioSchema),
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
        <Fieldset legend="Cadastro de Usuario">
            <Form control={control} onSubmit={({ data }) => mutation.mutate(data)}>
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                        <TextInput
                            label="Nome:"
                            placeholder="Nome do usuário"
                            control={control}
                            name="nome"
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
                            onClick={() => navigate('/admin/Usuarios')}
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
