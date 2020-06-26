import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

// import global styles
import * as theme from './styles/theme';
import './styles/vendor/normalize.css';

// import components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
