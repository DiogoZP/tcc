import { Veiculo } from '@/types/Veiculo';
import { Flex, Button, TextInput } from '@mantine/core';
import { TbArrowLeft, TbPencil } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

type InfoTabProps = {
    veiculo: Veiculo;
};

export default function VeiculoInfo({ veiculo }: InfoTabProps) {
    const navigate = useNavigate();

    return (
        <Flex gap="sm" direction="column" p="sm">
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Id:"
                    flex={1}
                    miw="sm"
                    readOnly
                    defaultValue={veiculo.id}
                />
                <TextInput
                    label="Placa:"
                    flex={2}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.placa}
                />
                <TextInput
                    label="Marca:"
                    flex={3}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.marca}
                />
                <TextInput
                    label="Modelo:"
                    flex={3}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.modelo}
                />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Status:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.status}
                />
                <TextInput
                    label="Setor:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.setor.nome}
                />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput label="Tipo:" flex={1} miw={200} readOnly defaultValue={veiculo.tipo} />
                <TextInput label="Ano:" flex={1} miw={200} readOnly defaultValue={veiculo.ano} />
                <TextInput label="Cor:" flex={1} miw={200} readOnly defaultValue={veiculo.cor} />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Renavam:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.renavam}
                />
                <TextInput
                    label="Chassi:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.chassi}
                />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput label="Km:" flex={1} miw={200} readOnly defaultValue={veiculo.km} />
                <TextInput
                    label="Combustível:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.combustivel}
                />
                <TextInput
                    label="Categoria CNH:"
                    flex={1}
                    miw={200}
                    readOnly
                    defaultValue={veiculo.categoriaCNH}
                />
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
                    onClick={() => navigate(`/admin/veiculos/editar/${veiculo.id}`)}
                >
                    Editar veículo
                </Button>
            </Flex>
        </Flex>
    );
}
