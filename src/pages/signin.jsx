import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseCtx } from '../context/firebase';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const { firebase } = useContext(FirebaseCtx);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then(() => history.push(ROUTES.BROWSE))
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {errorMsg && <Form.Error>{errorMsg}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              required
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              required
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit">Sign In</Form.Submit>
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
