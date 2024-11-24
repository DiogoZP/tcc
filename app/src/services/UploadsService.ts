import axios from '@/axios';
import { UploadForm, Upload } from '@/types/Upload';
export default class UploadsService {
    static async criar(upload: FormData): Promise<Upload> {
        const { data } = await axios.post<Upload>(`/uploads`, upload);
        return data;
    }

    static async listar(): Promise<Upload[]> {
        const { data } = await axios.get<Upload[]>(`/uploads`);
        return data;
    }

    static async buscar(id: number): Promise<Upload> {
        const { data } = await axios.get<Upload>(`/uploads/${id}`);
        return data;
    }

    static async atualizar(id: number, upload: UploadForm): Promise<Upload> {
        const { data } = await axios.patch<Upload>(`/uploads/${id}`, upload);
        return data;
    }

    static async deletar(id: number): Promise<Upload> {
        const { data } = await axios.delete<Upload>(`/uploads/${id}`);
        return data;
    }
}
