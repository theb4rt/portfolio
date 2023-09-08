import Head from 'next/head';
import { Grid, Paper } from '@mantine/core';
import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import { links } from '../config/AppMenu';
import ConsoleEmulator from '../components/ConsoleEmulator/ConsoleEmulator';
import AppBody from '../components/AppBody/AppBody.';
import { AppFooter } from '../components/AppFooter/AppFooter';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>b4rt.dev</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="title" content="B4rt.dev - Jose Manuel's Software Engineering Portfolio" />
                <meta
                  name="description"
                  content="Software Engineer, Python Developer, Linux Enthusiast, Security Researcher, and more.."
                />

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
                            <ConsoleEmulator />

                        </Paper>
                    </Grid.Col>
                </Grid>

            </AppBody>
            <AppFooter />

        </>
    );
}
