import { MRT_Localization_PT_BR } from 'mantine-react-table/locales/pt-BR/index.cjs';

const config = {
    localization: MRT_Localization_PT_BR,
    enableRowActions: true,
    enableDensityToggle: false,
    defaultColumn: { maxSize: 100 },
    positionActionsColumn: 'last' as const,
    initialState: {
        density: 'xs' as const,
        columnVisibility: {
            ano: false,
            cor: false,
            renavam: false,
            chassi: false,
            km: false,
            combustivel: false,
            categoriaCNH: false,
            cpf: false,
            rg: false,
            numeroCNH: false,
            validadeCNH: false,
            telefone: false,
        },
    },
};

export default config;
