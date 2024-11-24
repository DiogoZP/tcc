import { Motorista } from '@/types/Motorista';
import { Flex, Button, TextInput } from '@mantine/core';
import { TbArrowLeft, TbPencil } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

type InfoTabProps = {
    motorista: Motorista;
};

export default function MotoristaInfo({ motorista }: InfoTabProps) {
    const navigate = useNavigate();

    return (
        <Flex gap="sm" direction="column" p="sm">
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput label="Id:" flex={2} miw={200} defaultValue={motorista.id} readOnly />
                <TextInput
                    label="Nome:"
                    flex={2}
                    miw={200}
                    defaultValue={motorista.nome}
                    readOnly
                />
                <TextInput label="CPF:" flex={2} miw={200} defaultValue={motorista.cpf} readOnly />
                <TextInput label="RG:" flex={2} miw={200} defaultValue={motorista.rg} readOnly />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Categoria CNH:"
                    flex={2}
                    miw={200}
                    defaultValue={motorista.categoriaCNH}
                    readOnly
                />
                <TextInput
                    label="Número da CNH:"
                    flex={2}
                    miw={200}
                    defaultValue={motorista.numeroCNH}
                    readOnly
                />
                <TextInput
                    label="Validade da CNH:"
                    flex={1}
                    miw={200}
                    defaultValue={dayjs(motorista.validadeCNH).format('DD/MM/YYYY')}
                    readOnly
                />
            </Flex>
            <Flex gap="sm" wrap={'wrap'}>
                <TextInput
                    label="Telefone:"
                    flex={1}
                    miw={200}
                    defaultValue={motorista.telefone}
                    readOnly
                />
                <TextInput
                    label="Endereço:"
                    flex={1}
                    miw={200}
                    defaultValue={motorista.endereco}
                    readOnly
                />
                <TextInput
                    label="Setor:"
                    flex={1}
                    miw={200}
                    defaultValue={motorista.setor.nome}
                    readOnly
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
                    onClick={() => navigate(`/admin/motoristas/editar/${motorista.id}`)}
                >
                    Editar veículo
                </Button>
            </Flex>
        </Flex>
    );
}
