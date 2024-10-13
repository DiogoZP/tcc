import { MantineReactTable } from 'mantine-react-table';
import { ActionIcon, Flex, Tooltip, Button, Text } from '@mantine/core';
import { TbCheck, TbX } from 'react-icons/tb';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import { TbEdit, TbTrash, TbPlus } from 'react-icons/tb';
import { MRT_ColumnDef } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Motorista } from '@/types/Motorista';
import MotoristasService from '@/services/MotoristasService';

type DataTableProps = {
    columns: MRT_ColumnDef<Motorista>[];
    data: Motorista[];
};

export default function MotoristasTable({ columns, data }: DataTableProps) {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: MotoristasService.remover,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['motoristas'] });
            notifications.show({
                title: 'Sucesso',
                message: 'Motorista removido com sucesso',
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
            localization={MRT_Localization_PT_BR}
            enableRowActions
            enableDensityToggle={false}
            defaultColumn={{ maxSize: 100 }}
            positionActionsColumn="last"
            initialState={{
                density: 'xs',
                columnVisibility: {
                    cpf: false,
                    rg: false,
                    numeroCNH: false,
                    validadeCNH: false,
                    telefone: false,
                },
            }}
            renderRowActions={({ row }) => (
                <Flex gap="md">
                    <Tooltip label="Editar">
                        <ActionIcon
                            onClick={() =>
                                navigate(`/admin/motoristas/editar/${row.getValue('id')}`)
                            }
                        >
                            <TbEdit />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Deletar">
                        <ActionIcon
                            color="red"
                            onClick={() => {
                                modals.openConfirmModal({
                                    title: 'Deletar motorista',
                                    children: (
                                        <Text>
                                            Tem certeza que deseja deletar este motorista?
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
                        onClick={() => navigate(`/admin/motoristas/criar`)}
                        leftSection={<TbPlus size="20" />}
                    >
                        Adicionar motorista
                    </Button>
                </Flex>
            )}
        />
    );
}
