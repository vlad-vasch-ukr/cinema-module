import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';
import { useAppSelector } from '../../hooks/redux';
import CssBaseline from '@mui/material/CssBaseline';

const Theme: React.FC = ({ children }) => {
  const { isLightMode } = useAppSelector(state => state.themeReducer);
  const theme = isLightMode ? lightTheme : darkTheme;
  const selectedTheme = createTheme(theme);
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;