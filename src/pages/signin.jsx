import React, { useState } from 'react';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';

  const hanldeSingin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base method="POST" onSubmit={hanldeSingin}>
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="Off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?&nbsp;
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
