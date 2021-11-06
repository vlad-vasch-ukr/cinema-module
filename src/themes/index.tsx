import { ThemeOptions } from '@mui/material';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#05074e',
      light: '#24368e',
      dark: '#040527',
    },
    secondary: {
      main: '#e0181d',
    },
    background: {
      default: '#d2d2d2',
      paper: '#fafafa',
    },
    error: {
      main: '#ff1200',
    },
    divider: 'rgba(49,46,46,0.12)',
    info: {
      main: '#227dc5',
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#626369',
      light: '#86878c',
    },
    secondary: {
      main: '#b32454',
    },
    background: {
      default: '#181717',
      paper: '#2d2b2b',
    },
    error: {
      main: '#bd2a1f',
    },
    divider: 'rgba(49,46,46,0.12)',
  },
};
