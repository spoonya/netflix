import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import GlobalStyles from './global-styles';

render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
