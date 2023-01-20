import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#293142',
  secondary: '#e1fbfc',
  accent: '#ee6c4e',
  success: '#388E3C',
  error: '#D32F2F',
  white: '#FFFFFF',
  black: '#000000',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    accent: {
      main: colors.accent
    },
    success: {
      main: colors.success
    },
    error: {
      main: colors.error
    },
    white: {
      main: colors.white
    },
    black: {
      main: colors.black
    }
  }
});