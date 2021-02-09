import React from 'react';

import { Container, Title, SubTitle, Disclaimer } from './styles/feature';

export default function Feature(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Feature.Title = function FeatureTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle(props) {
  const { children } = props;

  return <SubTitle>{children}</SubTitle>;
};

Feature.Disclaimer = function FeatureDIsclaimer(props) {
  const { children } = props;

  return <Disclaimer>{children}</Disclaimer>;
};
