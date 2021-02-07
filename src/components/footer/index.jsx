import React from 'react';
import { Container, Row, Col, Link, Title, Text } from './styles/footer';

export default function Footer(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Footer.Row = function FooterRow(props) {
  const { children } = props;

  return <Row>{children}</Row>;
};

Footer.Col = function FooterCol(props) {
  const { children } = props;

  return <Col>{children}</Col>;
};

Footer.Link = function FooterLink(props) {
  const { children, href } = props;

  return <Link href={href}>{children}</Link>;
};

Footer.Title = function FooterTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Footer.Text = function FooterText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};
