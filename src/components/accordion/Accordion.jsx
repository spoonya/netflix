import React, { createContext, useState, useContext } from 'react';
import {
  Container,
  Item,
  Body,
  Header,
  Inner,
  Title
} from './styles/accordion';

const ToggleCtx = createContext();

export default function Accordion(props) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function FaqTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Accordion.Item = function FaqItem(props) {
  const [toggle, setToggle] = useState(false);
  const { children } = props;

  return (
    <ToggleCtx.Provider value={{ toggle, setToggle }}>
      <Item>{children}</Item>
    </ToggleCtx.Provider>
  );
};

Accordion.Header = function FaqHeader(props) {
  const { children } = props;
  const { toggle, setToggle } = useContext(ToggleCtx);

  return (
    <Header onClick={() => setToggle((prev = toggle) => !prev)}>
      {children}
      {toggle ? (
        <img src="/images/icons/close.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function FaqBody(props) {
  const { children } = props;
  const { toggle } = useContext(ToggleCtx);

  return toggle ? <Body>{children}</Body> : null;
};
