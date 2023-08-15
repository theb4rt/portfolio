import Head from 'next/head';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import AppHeader from '../components/AppHeader/AppHeader.';
import { links } from '../config/AppMenu';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>b4rt.dev</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <AppHeader links={links} />
            <ColorSchemeToggle />
        </>
    );
}
