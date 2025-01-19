'use client';

import { FaCar, FaChevronRight, FaHouse } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const items = [
    {
        title: 'Home',
        url: '/admin',
        icon: FaHouse,
    },
    {
        title: 'Frota',
        isActive: true,
        items: [
            {
                title: 'Veiculos',
                icon: FaCar,
                url: '/admin/veiculos',
            },
        ],
    },
];

export function NavMain() {
    const pathname = usePathname();
    const isActive = (url: string | undefined) => url == pathname;

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) =>
                    item.items ? (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        <span className='font-bold'>{item.title}</span>
                                        <FaChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    className={
                                                        isActive(subItem.url)
                                                            ? 'bg-primary hover:bg-secondary'
                                                            : 'hover:bg-secondary'
                                                    }
                                                >
                                                    <Link href={subItem.url}>
                                                        {subItem.icon && <subItem.icon />}
                                                        <span className='font-bold'>{subItem.title}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                className={
                                    isActive(item.url)
                                        ? 'bg-primary hover:bg-secondary'
                                        : 'hover:bg-secondary'
                                }
                            >
                                <Link href={item.url ?? ''}>
                                    {item.icon && <item.icon />}
                                    <span className='font-bold'>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}
