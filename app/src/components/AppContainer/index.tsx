import { AppShell, Burger, Flex } from '@mantine/core';
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
                <Flex px="md" align='center' h={'100%'}>
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <img src='/favicon.png' alt="Logo" style={{
                        height: 40,
                        width: 'auto',
                    }} />
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default AppContainer;
