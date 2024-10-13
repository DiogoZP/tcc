import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader, Flex, Tabs } from '@mantine/core';
import { Veiculo } from '@/types/Veiculo';
import { TbInfoCircle, TbTool } from 'react-icons/tb';
import VeiculoInfo from '@/components/Veiculos/VisualizarVeiculo/VeiculoInfo';
import VeiculosService from '@/services/VeiculosService';

export default function VisualizarVeiculo() {
    const { id } = useParams();

    const {
        data: veiculo,
        isLoading,
        error,
    } = useQuery<Veiculo>({
        queryKey: ['veiculos', Number(id)],
        queryFn: () => VeiculosService.buscar(Number(id)),
    });

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Loader size="70" />
            </Flex>
        );
    }

    if (error || !veiculo) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <h1>Veículo não encontrado</h1>
            </Flex>
        );
    }

    return (
        <Tabs w="100%" defaultValue="informacoes">
            <Tabs.List>
                <Tabs.Tab value="informacoes" leftSection={<TbInfoCircle size={20} />}>
                    Informações
                </Tabs.Tab>
                <Tabs.Tab value="manutencoes" leftSection={<TbTool size={20} />}>
                    Manutenções
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="informacoes">
                <Flex direction="column" gap="sm">
                    <VeiculoInfo veiculo={veiculo} />
                </Flex>
            </Tabs.Panel>
            <Tabs.Panel value="manutencoes">
                <h1>Manutenções</h1>
            </Tabs.Panel>
        </Tabs>
    );
}
