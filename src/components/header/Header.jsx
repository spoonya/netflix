import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container,
  Feature,
  Background,
  Logo,
  ButtonLink,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
  Dropdown,
  Picture,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/header';

export default function Header(props) {
  const { children, bg = true, src } = props;

  return bg ? (
    <Background src={src} dontShowOnSmallViewPort>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Feature = function HeaderFeature(props) {
  const { children } = props;

  return <Feature>{children}</Feature>;
};

Header.Frame = function HeaderFrame(props) {
  const { children } = props;

  return <Container>{children}</Container>;
};

Header.Group = function HeaderGroup(props) {
  const { children } = props;

  return <Group>{children}</Group>;
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

Header.Text = function HeaderText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};

Header.TextLink = function HeaderTextLink(props) {
  const { children, onClick, active } = props;

  return (
    <TextLink onClick={onClick} active={active}>
      {children}
    </TextLink>
  );
};

Header.FeatureCallOut = function HeaderFeatureCallOut(props) {
  const { children } = props;

  return <FeatureCallOut>{children}</FeatureCallOut>;
};

Header.Dropdown = function HeaderDropdown(props) {
  const { children } = props;

  return <Dropdown>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture(props) {
  const { src } = props;

  return <Picture src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile(props) {
  const { children } = props;

  return <Profile>{children}</Profile>;
};

Header.Search = function HeaderSearch(props) {
  const { searchTerm, setSearchTerm } = props;

  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search>
      <SearchIcon
        onClick={() => setSearchActive((prev) => !prev)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton(props) {
  const { children } = props;

  return <PlayButton>{children}</PlayButton>;
};
