import React from 'react';
import { Container, Input, Button, Text } from './styles/opt-form';

export default function OptForm(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

OptForm.Input = function OptFormInput() {
  return <Input />;
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
