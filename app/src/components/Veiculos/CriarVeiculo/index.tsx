import { useForm } from 'react-hook-form';
import z from 'zod';

const veiculoSchema = z.object({
    id: z.number(),
    placa: z.string(),
    marca: z.string(),
    modelo: z.string(),
    tipo: z.string(),
    ano: z.number(),
    cor: z.string(),
    renavam: z.string(),
    chassi: z.string(),
    km: z.number(),
    combustivel: z.string(),
    categoriaCNH: z.string(),
    status: z.string(),
    setorID: z.number(),
});


function CriarVeiculo()

c

{
    return (
        <div>
            <h1>Criar Veículo</h1>
        </div>
    );
}

export default CriarVeiculo;