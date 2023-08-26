import React from 'react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
    const {
        colorScheme,
        toggleColorScheme,
    } = useMantineColorScheme();

    return (
        <Group position="center" mt="xl">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="xl"
              sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.primary : theme.colors.secondary,
                    color: theme.colorScheme === 'dark' ? theme.colors.secondary : theme.colors.primary,
                })}
            >
                {colorScheme === 'dark' ? (
                    <IconSun size={20} stroke={1.5} />
                ) : (
                    <IconMoonStars size={20} stroke={1.5} />
                )}
            </ActionIcon>
        </Group>
    );
}
