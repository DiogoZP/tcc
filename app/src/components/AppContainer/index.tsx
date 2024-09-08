import { AppShell, Burger, Group } from '@mantine/core';
import Navbar from '@/components/Navbar';
import { useDisclosure } from '@mantine/hooks';

type AppContainerProps = {
    children: React.ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
    const [opened, { toggle }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group px="md">
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <h2>Logo</h2>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default AppContainer;
