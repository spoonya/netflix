import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container,
  Background,
  Frame,
  Logo,
  ButtonLink
} from './styles/header';

export default function Header(props) {
  const { children, bg } = props;

  return bg ? children : <Background>{children}</Background>;
}

Header.Frame = function HeaderFrame(props) {
  const { children } = props;

  return <Container>{children}</Container>;
};

Header.Logo = function HeaderLogo(props) {
  const { to, src, alt } = props;

  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink(props) {
  const { children, to } = props;

  return <ButtonLink to={to}>{children}</ButtonLink>;
};
