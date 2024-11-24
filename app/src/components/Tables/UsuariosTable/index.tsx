import { MantineReactTable } from 'mantine-react-table';
import { ActionIcon, Flex, Tooltip, Button, Text } from '@mantine/core';
import { TbCheck, TbX, TbEdit, TbTrash, TbPlus } from 'react-icons/tb';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Usuario } from '@/types/Usuario';
import UsuariosService from '@/services/UsuariosService';
import tablesConfig from '@/components/Tables/tablesConfig';

type DataTableProps = {
    columns: MRT_ColumnDef<Usuario>[];
    data: Usuario[];
};

export default function UsuarioesTable({ columns, data }: DataTableProps) {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: UsuariosService.remover,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['usuarios'] });
            notifications.show({
                title: 'Sucesso',
                message: 'Usuário removido com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
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

    return (
        <MantineReactTable
            data={data}
            columns={columns}
            {...tablesConfig}
            initialState={{
                density: 'xs' as const,
            }}
            renderRowActions={({ row }) => (
                <Flex gap="md">
                    <Tooltip label="Editar">
                        <ActionIcon
                            onClick={() => navigate(`/admin/usuarios/editar/${row.getValue('id')}`)}
                        >
                            <TbEdit />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Deletar">
                        <ActionIcon
                            color="red"
                            onClick={() => {
                                modals.openConfirmModal({
                                    title: 'Deletar usuario',
                                    children: (
                                        <Text>
                                            Tem certeza que deseja deletar este usuario?
                                            <br />
                                            Essa ação não poderá ser desfeita!
                                        </Text>
                                    ),
                                    labels: { cancel: 'Cancelar', confirm: 'Deletar' },
                                    confirmProps: { color: 'red' },
                                    centered: true,
                                    onConfirm: () => mutate.mutate(row.getValue('id')),
                                });
                            }}
                        >
                            <TbTrash />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            )}
            renderTopToolbarCustomActions={() => (
                <Flex gap="md" align="center">
                    <Button
                        onClick={() => navigate(`/admin/usuarios/criar`)}
                        leftSection={<TbPlus size="20" />}
                    >
                        Adicionar usuario
                    </Button>
                </Flex>
            )}
            mantineTableBodyRowProps={({ row }) => ({
                style: {
                    cursor: 'pointer',
                },
                onDoubleClick: () => navigate(`/admin/usuarios/visualizar/${row.getValue('id')}`),
            })}
        />
    );
}