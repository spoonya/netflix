import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer(props) {
  const { children } = props;

  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.png"
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
