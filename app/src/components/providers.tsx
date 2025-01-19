'use client';
import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

const NextThemesProvider = dynamic(() => import('next-themes').then((e) => e.ThemeProvider), {
    ssr: false,
});

export function Providers({ children }: PropsWithChildren) {
    return (
            <NextThemesProvider
                defaultTheme="system"
                attribute="class"
                enableSystem
                enableColorScheme
                disableTransitionOnChange
            >
                {children}
            </NextThemesProvider>
    );
}
