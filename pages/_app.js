import '../styles/globalStyles.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/styles.js';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}
