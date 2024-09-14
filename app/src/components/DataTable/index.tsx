import { MantineReactTable } from 'mantine-react-table';
import { ActionIcon, Flex, Tooltip } from '@mantine/core';
import { TbEdit, TbTrash } from 'react-icons/tb';
import { MRT_ColumnDef, MRT_RowData } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';

type DataTableProps<T extends MRT_RowData> = {
    columns: MRT_ColumnDef<T>[];
    data: T[];
};

function DataTable<T extends MRT_RowData>({ columns, data }: DataTableProps<T>) {
    return (
        <MantineReactTable
            data={data}
            columns={columns}
            localization={MRT_Localization_PT_BR}
            enableRowActions
            defaultColumn={{ maxSize: 100 }}
            renderRowActions={() => (
                <Flex gap="md">
                    <Tooltip label="Editar">
                        <ActionIcon onClick={() => {}}>
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
        />
    );
}

export default DataTable;
