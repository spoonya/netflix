import React, { createContext, useState, useContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

export const FeatureCtx = createContext();

export default function Card(props) {
  const { children } = props;
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureCtx.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container>{children}</Container>
    </FeatureCtx.Provider>
  );
}

Card.Group = function CardGroup(props) {
  const { children } = props;

  return <Group>{children}</Group>;
};

Card.Title = function CardTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Card.SubTitle = function CardSubTitle(props) {
  const { children } = props;

  return <SubTitle>{children}</SubTitle>;
};

Card.Text = function CardText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};

Card.Entities = function CardEntities(props) {
  const { children } = props;

  return <Entities>{children}</Entities>;
};

Card.Meta = function CardMeta(props) {
  const { children } = props;

  return <Meta>{children}</Meta>;
};

Card.Item = function CardImage(props) {
  const { children, item } = props;
  const { setShowFeature, setItemFeature } = useContext(FeatureCtx);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage(props) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

Card.Feature = function CardFeature(props) {
  const { children, category } = props;

  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureCtx);

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="3rem 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="600">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
