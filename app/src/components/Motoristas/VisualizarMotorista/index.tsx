import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader, Flex, Tabs } from '@mantine/core';
import { Motorista } from '@/types/Motorista';
import MotoristasService from '@/services/MotoristasService';
import { TbInfoCircle, TbUpload } from 'react-icons/tb';
import MotoristaInfo from './MotoristaInfo';
import MotoristaUploads from './MotoristaUploads';

export default function VisualizarMotorista() {
    const { id } = useParams();

    const {
        data: motorista,
        isLoading,
        error,
    } = useQuery<Motorista>({
        queryKey: ['motorista' + id],
        queryFn: () => MotoristasService.buscar(Number(id)),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !motorista) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <h1>Motorista não encontrado</h1>
            </Flex>
        );
    }

    return (
        <Tabs w="100%" defaultValue="informacoes">
            <Tabs.List>
                <Tabs.Tab value="informacoes" leftSection={<TbInfoCircle size={20} />}>
                    Informações
                </Tabs.Tab>
                <Tabs.Tab value="uploads" leftSection={<TbUpload size={20} />}>
                    Uploads
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="informacoes">
                <Flex direction="column" gap="sm">
                    <MotoristaInfo motorista={motorista} />
                </Flex>
            </Tabs.Panel>
            <Tabs.Panel value="uploads">
                <MotoristaUploads motorista={motorista} />
            </Tabs.Panel>
        </Tabs>
    );
}
