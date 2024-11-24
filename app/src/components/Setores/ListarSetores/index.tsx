import { type MRT_ColumnDef } from 'mantine-react-table';
import { Loader, Flex } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import SetoresTable from '@/components/Tables/SetoresTable';
import SetoresService from '@/services/SetoresService';
import { Setor } from '@/types/Setor';

const columns: MRT_ColumnDef<Setor>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Nome',
        accessorKey: 'nome',
    }
];

export default function ListarSetores() {
    const {
        data: setores,
        error,
        isLoading,
    } = useQuery<Setor[]>({ queryKey: ['motoristas'], queryFn: SetoresService.listar });

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

    return <SetoresTable columns={columns} data={setores} />;
}

