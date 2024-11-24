import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Flex, Button, TextInput, Loader } from '@mantine/core';
import { TbArrowLeft, TbPencil } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import UsuariosService from '@/services/UsuariosService';
import { Usuario } from '@/types/Usuario';

export default function VisualizarUsuario() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        data: usuario,
        isLoading,
        error,
    } = useQuery<Usuario>({
        queryKey: ['usuario' + id],
        queryFn: () => UsuariosService.buscar(Number(id)),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !usuario) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <h1>Usuario não encontrado</h1>
            </Flex>
        );
    }

    return (
        <Flex gap="sm" direction="column" p="sm">
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Id:"
                    flex={1}
                    miw="sm"
                    readOnly
                    defaultValue={usuario.id.toString()}
                />
                <TextInput label="Nome:" flex={2} miw="sm" readOnly defaultValue={usuario.nome} />
                <TextInput label="Setor:" flex={2} miw="sm" readOnly defaultValue={usuario.setor.nome} />
                <TextInput label="Email:" flex={2} miw="sm" readOnly defaultValue={usuario.email} />
            </Flex>
            <Flex justify="space-between" w="100%" mt="sm">
                <Button
                    onClick={() => navigate(-1)}
                    variant="light"
                    leftSection={<TbArrowLeft size="20" />}
                >
                    Voltar
                </Button>
                <Button
                    leftSection={<TbPencil size="20" />}
                    onClick={() => navigate(`/admin/usuarios/editar/${usuario.id}`)}
                >
                    Editar usuario
                </Button>
            </Flex>
        </Flex>
    );
}
