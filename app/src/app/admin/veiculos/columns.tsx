'use client';

import { TableHeader } from '@/components/table/table-header';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Veiculo } from '@/types/Veiculo';
import { ColumnDef } from '@tanstack/react-table';
import { FaTrash, FaPencil } from 'react-icons/fa6';

export const columns: ColumnDef<Veiculo>[] = [
    {
        id: 'Id',
        accessorKey: 'id',
        header: ({ column }) => <TableHeader column={column} title="Id" />,
    },
    {
        id: 'Placa',
        accessorKey: 'placa',
        header: ({ column }) => <TableHeader column={column} title="Placa" />,
    },
    {
        id: 'Marca',
        accessorKey: 'marca',
        header: ({ column }) => <TableHeader column={column} title="Marca" />,
    },
    {
        id: 'Modelo',
        accessorKey: 'modelo',
        header: ({ column }) => <TableHeader column={column} title="Modelo" />,
    },
    {
        id: 'Tipo',
        accessorKey: 'tipo',
        header: ({ column }) => <TableHeader column={column} title="Tipo" />,
    },
    {
        id: 'Setor',
        accessorKey: 'setor.nome',
        header: ({ column }) => <TableHeader column={column} title="Setor" />,
    },
    {
        id: 'Ações',
        header: 'Ações',
        cell: () => {
            return (
                <div className="flex gap-3 justify-evenly">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className="size-9">
                                <FaPencil />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Editar</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="destructive" className="size-9">
                                <FaTrash />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Excluir</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            );
        },
    },
];
