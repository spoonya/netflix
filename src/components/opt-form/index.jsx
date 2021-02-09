import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

OptForm.Input = function OptFormInput(props) {
  const { placeholder } = props;

  return <Input placeholder={placeholder} />;
};

OptForm.Button = function OptFormButton(props) {
  const { children } = props;

  return (
    <Button>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

OptForm.Text = function OptFormText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};

OptForm.Break = function OptFormBreak() {
  return <Break />;
};
