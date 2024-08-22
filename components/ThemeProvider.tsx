'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }:{ children: any; attribute: string; defaultTheme: string; }) {
    return <NextThemesProvider { ...props }>{ children }</NextThemesProvider>
};