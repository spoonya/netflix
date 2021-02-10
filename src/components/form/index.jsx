import React from 'react';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit
} from './styles/form';

export default function Form(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Form.Base = function FormBase(props) {
  const { children, onSubmit } = props;

  return <Base onSubmit={onSubmit}>{children}</Base>;
};

Form.Error = function FormError(props) {
  const { children } = props;

  return <Error>{children}</Error>;
};

Form.Title = function FormTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Form.Text = function FormText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};

Form.TextSmall = function FormTextSmall(props) {
  const { children } = props;

  return <TextSmall>{children}</TextSmall>;
};

Form.Link = function FormLink(props) {
  const { children, to } = props;

  return <Link to={to}>{children}</Link>;
};

Form.Input = function FormInput(props) {
  const {
    children,
    placeholder,
    type,
    autoComplete,
    required,
    onChange
  } = props;

  return (
    <Input
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      required={required}
      onChange={onChange}
    >
      {children}
    </Input>
  );
};

Form.Submit = function FormSubmit(props) {
  const { children, type } = props;

  return <Submit type={type}>{children}</Submit>;
};
