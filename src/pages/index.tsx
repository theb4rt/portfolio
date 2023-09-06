import Head from 'next/head';
import { Button, Grid, Modal, Paper } from '@mantine/core';
import React, { useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import AppHeader from '../components/AppHeader/AppHeader.';
import { links } from '../config/AppMenu';
import ConsoleEmulator from '../components/ConsoleEmulator/ConsoleEmulator.';
import AppBody from '../components/AppBody/AppBody.';

export default function HomePage() {
    const [resetSignal, setResetSignal] = useState(false);

    return (
        <>
            <Head>
                <title>b4rt.dev</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <AppHeader links={links} />
            <AppBody>
                <Grid justify="center">
                    <Grid.Col>
                        <Paper
                          shadow="md"
                          style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <ConsoleEmulator resetSignal={resetSignal} />

                        </Paper>
                    </Grid.Col>
                </Grid>

            </AppBody>

        </>
    );
}
