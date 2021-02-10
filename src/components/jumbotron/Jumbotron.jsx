import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image
} from './styles/jumbotron';

export default function Jumbotron(props) {
  const { children, direction } = props;

  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer(props) {
  const { children } = props;

  return <Container>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane(props) {
  const { children } = props;

  return <Pane>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle(props) {
  const { children } = props;

  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage(props) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};
