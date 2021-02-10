import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import GlobalStyles from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseCtx } from './context/firebase';

render(
  <React.StrictMode>
    <FirebaseCtx.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseCtx.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
