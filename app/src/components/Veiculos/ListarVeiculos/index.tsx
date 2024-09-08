import { type MRT_ColumnDef } from 'mantine-react-table';
import { useQuery } from '@tanstack/react-query';
import DataTable from '@/components/DataTable';
import VeiculoService from '@/services/VeiculoService';
import Veiculo from '@/types/Veiculo';

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
        header: 'Status',
        accessorKey: 'status',
    },
    {
        header: 'Setor',
        accessorKey: 'setor.nome',
    },
];

function ListarVeiculos() {
    const {
        data: veiculos,
        isError,
        isLoading,
    } = useQuery<Veiculo[]>({ queryKey: ['veiculos'], queryFn: VeiculoService.listar });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError || !veiculos) {
        return <div>Error</div>;
    }

    return <DataTable columns={columns} data={veiculos} />;
}

export default ListarVeiculos;
