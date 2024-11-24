import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from 'react-hook-form-mantine';
import { Button, Fieldset, Flex } from '@mantine/core';
import { TbDeviceFloppy, TbX, TbCheck, TbArrowLeft } from 'react-icons/tb';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import { setorSchema, SetorForm } from '@/types/Setor';

export default function CriarSetor() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: SetoresService.criar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Setor cadastrado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });

            queryClient.invalidateQueries({
                queryKey: ['setores'],
            });

            navigate('/admin/setores');
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

    const { control } = useForm<SetorForm>({
        resolver: zodResolver(setorSchema),
    });

    return (
        <Fieldset legend="Cadastro de Setor">
            <Form control={control} onSubmit={({ data }) => mutation.mutate(data)}>
                <Flex gap="sm" direction="column">
                    <Flex gap="sm" wrap={'wrap'}>
                        <TextInput
                            label="Nome:"
                            placeholder="Nome do setor"
                            control={control}
                            name="nome"
                            flex={2}
                            miw={200}
                        />
                    </Flex>
                    <Flex justify="space-between" w="100%" mt="sm">
                        <Button
                            onClick={() => navigate('/admin/Setores')}
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
