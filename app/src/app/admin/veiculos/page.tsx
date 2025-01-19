import { Veiculo } from '@/types/Veiculo';
import { columns } from './columns';
import { DataTable } from '@/components/table/data-table';
import { fetchAuth } from '@/lib/fetchAuth';

export default async function Page() {
    const res = await fetchAuth(`${process.env.API_URL}/veiculos`, {
        next: { tags: ['veiculos'] },
    });

    const data: Veiculo[] = await res.json();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
