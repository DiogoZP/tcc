import { auth } from '@/auth';
import { NavMain } from '@/components/sidebar/nav-main';
import { NavUser } from '@/components/sidebar/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar';

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const session = await auth();
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>Header</SidebarHeader>
            <SidebarContent>
                <NavMain />
            </SidebarContent>
            <SidebarFooter>
                <NavUser session={session} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
