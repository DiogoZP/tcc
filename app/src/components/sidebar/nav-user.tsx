'use client';

import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { Session } from 'next-auth';
import { logout } from '@/services/authService';
import { Toggle } from '../ui/toggle';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa6';

export function NavUser({ session }: { session: Session | null }) {
    const { isMobile } = useSidebar();
    const { theme, setTheme } = useTheme();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    {session?.user?.name}
                                </span>
                                <span className="truncate text-xs">{session?.user?.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? 'bottom' : 'right'}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuItem>
                            <Toggle
                                className="flex justify-center items-center w-full"
                                onClick={() => {
                                    setTheme(theme == 'dark' ? 'light' : 'dark');
                                }}
                            >
                                {theme == 'dark' ? <FaSun /> : <FaMoon />}
                                Modo Noturno
                            </Toggle>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logout}>
                            <LogOut />
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
