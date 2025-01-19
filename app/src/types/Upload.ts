import z from 'zod';

export type Upload = {
    id: number;
    filename: string;
    mimetype: string;
    motoristaId?: number;
    veiculoId?: number;
    itemId?: number;
};

export const uploadSchema = z.object({
    file: z.instanceof(File, { message: 'selecione um arquivo' }),
});

export type UploadForm = z.infer<typeof uploadSchema>;
