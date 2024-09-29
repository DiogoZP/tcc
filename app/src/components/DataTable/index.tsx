import { MantineReactTable } from 'mantine-react-table';
import { ActionIcon, Flex, Tooltip, Button } from '@mantine/core';
import { TbEdit, TbTrash, TbPlus } from 'react-icons/tb';
import { MRT_ColumnDef, MRT_RowData } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';
import { useNavigate } from 'react-router-dom';

type DataTableProps<T extends MRT_RowData> = {
    columns: MRT_ColumnDef<T>[];
    data: T[];
    nome: string;
};

function DataTable<T extends MRT_RowData>({ columns, data, nome }: DataTableProps<T>) {
    const navigate = useNavigate();

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
                    ano: false,
                    cor: false,
                    renavam: false,
                    chassi: false,
                    km: false,
                    combustivel: false,
                    categoriaCNH: false,
                },
            }}
            renderRowActions={({ row }) => (
                <Flex gap="md">
                    <Tooltip label="Editar">
                        <ActionIcon
                            onClick={() => navigate(`/admin/${nome}/editar/${row.getValue('id')}`)}
                        >
                            <TbEdit />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Deletar">
                        <ActionIcon color="red" onClick={() => {}}>
                            <TbTrash />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            )}
            renderTopToolbarCustomActions={() => (
                <Flex gap="md" align="center">
                    <Button
                        onClick={() => navigate(`/admin/${nome}/criar`)}
                        leftSection={<TbPlus size="20" />}
                    >
                        Adicionar veículo
                    </Button>
                </Flex>
            )}
        />
    );
}

export default DataTable;
