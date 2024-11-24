import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Flex, Button, TextInput, Loader } from '@mantine/core';
import { TbArrowLeft, TbPencil } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import SetoresService from '@/services/SetoresService';
import { Setor } from '@/types/Setor';

export default function VisualizarSetor() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        data: setor,
        isLoading,
        error,
    } = useQuery<Setor>({
        queryKey: ['setor' + id],
        queryFn: () => SetoresService.buscar(Number(id)),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !setor) {
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
                    label="ID:"
                    flex={1}
                    miw="sm"
                    readOnly
                    defaultValue={setor.id.toString()}
                />
                <TextInput label="Nome:" flex={1} miw="sm" readOnly defaultValue={setor.nome} />
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
                    onClick={() => navigate(`/admin/setores/editar/${setor.id}`)}
                >
                    Editar setor
                </Button>
            </Flex>
        </Flex>
    );
}
