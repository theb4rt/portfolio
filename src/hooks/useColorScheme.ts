import { useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { ColorScheme } from '@mantine/core';

export function useColorScheme(initialColorScheme: ColorScheme = 'dark'): [ColorScheme, (value?: ColorScheme) => void] {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    return [colorScheme, toggleColorScheme];
}
