import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signin, Signup, Browse } from './pages';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
