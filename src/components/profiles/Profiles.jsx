import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profiles(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Profiles.Title = function ProfilesTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Profiles.List = function ProfilesList(props) {
  const { children } = props;

  return <List>{children}</List>;
};

Profiles.User = function ProfilesUser(props) {
  const { children, onClick } = props;

  return <Item onClick={onClick}>{children}</Item>;
};

Profiles.Picture = function ProfilesPic(props) {
  const { src, alt } = props;

  return (
    <Picture
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
      alt={alt}
    />
  );
};

Profiles.Name = function ProfilesName(props) {
  const { children } = props;

  return <Name>{children}</Name>;
};
