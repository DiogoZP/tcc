import { type MRT_ColumnDef } from 'mantine-react-table';
import { Loader, Flex } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import DataTable from '@/components/DataTable';
import VeiculosService from '@/services/VeiculosService';
import { Veiculo } from '@/types/Veiculo';

const columns: MRT_ColumnDef<Veiculo>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Placa',
        accessorKey: 'placa',
    },
    {
        header: 'Marca',
        accessorKey: 'marca',
    },
    {
        header: 'Modelo',
        accessorKey: 'modelo',
    },
    {
        header: 'Tipo',
        accessorKey: 'tipo',
    },
    {
        header: 'Status',
        accessorKey: 'status',
    },
    {
        header: 'Setor',
        accessorKey: 'setor.nome',
    },
    {
        header: 'Ano',
        accessorKey: 'ano',
    },
    {
        header: 'Cor',
        accessorKey: 'cor',
    },
    {
        header: 'Renavam',
        accessorKey: 'renavam',
    },
    {
        header: 'Chassi',
        accessorKey: 'chassi',
    },
    {
        header: 'Km',
        accessorKey: 'km',
    },
    {
        header: 'Combustível',
        accessorKey: 'combustivel',
    },
    {
        header: 'Categoria CNH',
        accessorKey: 'categoriaCNH',
    },
];

function ListarVeiculos() {
    const {
        data: veiculos,
        isError,
        isLoading,
    } = useQuery<Veiculo[]>({ queryKey: ['veiculos'], queryFn: VeiculosService.listar });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }
    if (isError || !veiculos) {
        return <div>Error</div>;
    }

    return <DataTable<Veiculo> columns={columns} data={veiculos} nome="veiculos" />;
}

export default ListarVeiculos;
