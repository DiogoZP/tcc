import ReactDOM from 'react-dom/client';
import Router from '@/router';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'dayjs/locale/pt-br';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';
import '@mantine/dropzone/styles.layer.css';
import 'mantine-react-table/styles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto">
            <DatesProvider settings={{ locale: 'pt-br' }}>
            <ModalsProvider>
                <Notifications />
                <Router />
            </ModalsProvider>
            </DatesProvider>
        </MantineProvider>
    </QueryClientProvider>,
);
