import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#F59256',
          },
          accent: {
            main: '#FF6101',
          },
        }
      : {
          primary: {
            main: '#F59256',
          },
          accent: {
            main: '#FF6101',
          },
        }),
    colors: {
      white: '#ffffff',
      black: '#111111',
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        desktop: 1280,
      },
    },
  },
});

const SharedLayout = () => {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <div>layout</div>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { SharedLayout, ColorModeContext };
