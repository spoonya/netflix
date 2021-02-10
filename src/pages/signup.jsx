import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseCtx } from '../context/firebase';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const { firebase } = useContext(FirebaseCtx);
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name.trim(),
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {errorMsg && <Form.Error>{errorMsg}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              type="text"
              placeholder="First name"
              value={name}
              required
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              required
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              required
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit">Sign Up</Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?&nbsp;
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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
