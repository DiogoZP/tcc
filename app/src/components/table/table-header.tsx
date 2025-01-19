import { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface TableHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}

export function TableHeader<TData, TValue>({ column, title }: TableHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <p>{title}</p>;
    }

    return (
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-8"
                    onClick={() => column.toggleSorting()}
                >
                    <span>{title}</span>
                    {column.getIsSorted() === 'asc' ? (
                        <ArrowDown />
                    ) : column.getIsSorted() === 'desc' ? (
                        <ArrowUp />
                    ) : (
                        <ChevronsUpDown />
                    )}
                </Button>
            </div>
    );
}
