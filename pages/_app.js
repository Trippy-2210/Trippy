import {useState} from 'react';
import '../styles/globalStyles.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/styles.js';
import '../styles/messages.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trippy</title>
        <meta
          name='description'
          content='Join us on a trip! Reach out, message others, and have fun!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
