import { type MRT_ColumnDef } from 'mantine-react-table';
import { Loader, Flex } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import MotoristasTable from '@/components/Tables/MotoristasTable';
import MotoristasService from '@/services/MotoristasService';
import { Motorista } from '@/types/Motorista';
import dayjs from 'dayjs'

const columns: MRT_ColumnDef<Motorista>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Nome',
        accessorKey: 'nome',
    },
    {
        header: 'CPF',
        accessorKey: 'cpf',
    },
    {
        header: 'RG',
        accessorKey: 'rg',
    },
    {
        header: 'Categoria CNH',
        accessorKey: 'categoriaCNH',
    },
    {
        header: 'Número CNH',
        accessorKey: 'numeroCNH',
    },
    {
        header: 'Validade CNH',
        accessorFn(originalRow) {
            return dayjs(originalRow.validadeCNH).format('DD/MM/YYYY');
        },
    },
    {
        header: 'Telefone',
        accessorKey: 'telefone',
    },
    {
        header: 'Setor',
        accessorKey: 'setor.nome',
    }
];

export default function ListarMotoristas() {
    const {
        data: motoristas,
        isError,
        isLoading,
    } = useQuery<Motorista[]>({ queryKey: ['motoristas'], queryFn: MotoristasService.listar });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }
    if (isError || !motoristas) {
        return <div>Error</div>;
    }

    return <MotoristasTable columns={columns} data={motoristas} />;
}
