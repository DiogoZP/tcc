import { MantineReactTable, useMantineReactTable, } from 'mantine-react-table';
import { MRT_ColumnDef, MRT_RowData } from 'mantine-react-table';
import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';


type DataTableProps<T extends MRT_RowData> = {
    columns: MRT_ColumnDef<T>[];
    data: T[];
};

function DataTable<T extends MRT_RowData>({ columns, data }: DataTableProps<T>) {
    const table = useMantineReactTable({ columns, data, localization: MRT_Localization_PT_BR });

    return <MantineReactTable table={table} />;
}

export default DataTable;
