import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';

const config = {
    localization: MRT_Localization_PT_BR,
    enableRowActions: true,
    enableDensityToggle: false,
    defaultColumn: { maxSize: 100 },
    positionActionsColumn: 'last' as const,
};

export default config;
