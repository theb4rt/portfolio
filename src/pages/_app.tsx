import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie } from 'cookies-next';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useColorScheme } from '../hooks/useColorScheme';

type MyAppProps = AppProps & { initialColorScheme: ColorScheme };

export default function App({ Component, pageProps, initialColorScheme }: MyAppProps) {
  const [colorScheme, toggleColorScheme] = useColorScheme(initialColorScheme);

  return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
              <Component {...pageProps} />
              <Notifications />
          </MantineProvider>
      </ColorSchemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    initialColorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
