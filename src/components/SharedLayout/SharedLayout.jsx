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

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

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
