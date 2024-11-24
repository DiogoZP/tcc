import { type MRT_ColumnDef } from 'mantine-react-table';
import { Loader, Flex } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import UsuariosTable from '@/components/Tables/UsuariosTable';
import UsuariosService from '@/services/UsuariosService';
import { Usuario } from '@/types/Usuario';

const columns: MRT_ColumnDef<Usuario>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Nome',
        accessorKey: 'nome',
    },
    {
        header: 'Email',
        accessorKey: 'email'
    },
    {
        header: 'Setor',
        accessorKey: 'setor.nome'
    }
];

export default function ListarUsuarios() {
    const {
        data: usuarios,
        error,
        isLoading,
    } = useQuery<Usuario[]>({ queryKey: ['usuarios'], queryFn: UsuariosService.listar });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }
    if (error || !usuarios) {
        return <div>{error?.message}</div>;
    }

    return <UsuariosTable columns={columns} data={usuarios} />;
}

