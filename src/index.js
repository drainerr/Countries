import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import CountriesContext from './contexts/countriesCtx';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CountriesContext>
        <App />
      </CountriesContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
