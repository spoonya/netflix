import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect(props) {
  const { user, loggedInPath, children, path, exact } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute(props) {
  const { user, children } = props;

  return (
    <Route
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
