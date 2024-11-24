import { Veiculo } from '@/types/Veiculo';
import { Image, Flex, AspectRatio, Overlay, Text, Fieldset, Button } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { TbEye, TbTrash, TbCheck, TbX, TbUpload, TbFile } from 'react-icons/tb';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, useForm } from 'react-hook-form';
import { FileInput } from 'react-hook-form-mantine';
import { zodResolver } from '@hookform/resolvers/zod';
import UploadsService from '@/services/UploadsService';
import { UploadForm, uploadSchema } from '@/types/Upload';
import classes from './veiculoUploads.module.scss';

type VeiculoUploadsProps = {
    veiculo: Veiculo;
};

const url = process.env.API_URL;

export default function VeiculoUploads({ veiculo }: VeiculoUploadsProps) {
    const queryClient = useQueryClient();

    const { control } = useForm<UploadForm>({
        resolver: zodResolver(uploadSchema),
    });

    const mutationCreate = useMutation({
        mutationFn: UploadsService.criar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Upload realizado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });

            queryClient.invalidateQueries({ queryKey: ['veiculo' + veiculo.id] });
        },
        onError: (error) => {
            notifications.show({
                title: 'Erro',
                message: error.message,
                color: 'red',
                icon: <TbX size="20" />,
            });
        },
    });

    const mutationDelete = useMutation({
        mutationFn: UploadsService.deletar,
        onSuccess: () => {
            notifications.show({
                title: 'Sucesso',
                message: 'Upload deletado com sucesso',
                color: 'teal',
                icon: <TbCheck size="20" />,
            });

            queryClient.invalidateQueries({ queryKey: ['veiculo' + veiculo.id] });
        },
        onError: (error) => {
            notifications.show({
                title: 'Erro',
                message: error.message,
                color: 'red',
                icon: <TbX size="20" />,
            });
        },
    });

    return (
        <>
            <Flex justify="flex-end" mt="sm">
                <Button
                    leftSection={<TbUpload size={20} />}
                    onClick={() =>
                        modals.openConfirmModal({
                            modalId: 'upload',
                            title: 'Upload',
                            centered: true,
                            children: (
                                <Form
                                    control={control}
                                    onSubmit={({ data }) => {
                                        const formData = new FormData();
                                        formData.append('file', data.file);
                                        formData.append('veiculoId', veiculo.id.toString());
                                        modals.close('upload');
                                        mutationCreate.mutate(formData);
                                    }}
                                >
                                    <Flex gap="xl" direction="column">
                                        <FileInput
                                            name="file"
                                            label="Arquivo:"
                                            placeholder="Selecione um arquivo"
                                            leftSection={<TbFile />}
                                            control={control}
                                        />
                                        <Flex justify="flex-end">
                                            <Button
                                                type="submit"
                                                leftSection={<TbUpload size="20" />}
                                                w="20%"
                                            >
                                                Confirmar
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Form>
                            ),
                            size: 'xl',
                            labels: { cancel: 'Fechar', confirm: 'Upload' },
                            cancelProps: { display: 'none' },
                            confirmProps: { display: 'none' },
                        })
                    }
                >
                    Realizar Upload
                </Button>
            </Flex>
            <Fieldset legend="Uploads" w="100%">
                <Flex wrap="wrap" gap="md" p="sm">
                    {veiculo.uploads.length == 0 && (
                        <Text size="xl" c="gray" w="100%">
                            Não há uploads cadastrados!
                        </Text>
                    )}
                    {veiculo.uploads.length > 0 &&
                        veiculo.uploads.map((upload) => (
                            <AspectRatio ratio={16 / 9} w="30%" pos="relative">
                                <Image src={`${url}/uploads/${upload.id}`} alt={upload.filename} />
                                <Overlay
                                    color="blue"
                                    className={classes.overlay}
                                    onClick={() =>
                                        modals.openConfirmModal({
                                            title: upload.filename.substring(
                                                upload.filename.indexOf('-') + 1,
                                            ),
                                            children: (
                                                <Image
                                                    src={`${url}/uploads/${upload.id}`}
                                                    alt={upload.filename}
                                                />
                                            ),
                                            size: 'xl',
                                            labels: { cancel: 'Fechar', confirm: 'Excluir' },
                                            cancelProps: { display: 'none' },
                                            confirmProps: {
                                                bg: 'red',
                                                leftSection: <TbTrash size={20} />,
                                            },
                                            onConfirm: () => mutationDelete.mutate(upload.id),
                                        })
                                    }
                                >
                                    <Flex align="center" h="100%" direction="column">
                                        <Flex justify="center" align="center" h="100%">
                                            <TbEye size={30} color="white" />
                                            <Text size="lg" ml="sm" c="white">
                                                Visualizar
                                            </Text>
                                        </Flex>
                                        <Text
                                            size="xl"
                                            ml="sm"
                                            c="white"
                                            pos="absolute"
                                            bottom="0%"
                                            right="1%"
                                        >
                                            {upload.filename.substring(
                                                upload.filename.indexOf('-') + 1,
                                            )}
                                        </Text>
                                    </Flex>
                                </Overlay>
                            </AspectRatio>
                        ))}
                </Flex>
            </Fieldset>
        </>
    );
}
