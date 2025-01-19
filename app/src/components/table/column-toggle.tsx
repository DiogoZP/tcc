'use client';

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Settings2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export function ColumnToggle<TData>({ table }: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                    <Settings2 />
                    Colunas
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Habilitar Colunas</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) => typeof column.accessorFn !== 'undefined' && column.getCanHide(),
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onSelect={(e) => e.preventDefault()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
                <div className='flex flex-col my-3'>
                    <div className='flex justify-center'>
                        <Button
                            size="sm"
                            onClick={() => {
                                table
                                    .getAllColumns()
                                    .filter(
                                        (column) =>
                                            typeof column.accessorFn !== 'undefined' &&
                                            column.getCanHide(),
                                    )
                                    .map((column) => {
                                        column.toggleVisibility(true);
                                    });
                            }}
                        >
                            Habilitar Tudo
                        </Button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
