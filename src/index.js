import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';
import { StyledEngineProvider } from '@mui/material';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { getMode } from './styles/theme/theme';
import { mode } from './components/ToggleButton/ToggleButton';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={getMode(mode)}>
              <App />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      </PersistGate>
    </StyledEngineProvider>
  </React.StrictMode>
);
