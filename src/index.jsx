import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import GlobalStyles from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
