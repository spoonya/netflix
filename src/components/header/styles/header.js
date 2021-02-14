import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
      center / cover no-repeat;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 4.6rem 0 3rem;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1rem;
  }
`;

export const Logo = styled.img`
  max-width: 16rem;
  margin-right: 2rem;

  @media (max-width: 1000px) {
    max-width: 12rem;
  }

  @media (max-width: 600px) {
    margin-right: 1rem;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  font-size: 15px;
  border-radius: 3px;
  padding: 0.8rem 1.7rem;
  transition: 0.1s background-color linear;

  &:hover {
    background: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 15rem 0 25rem 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 5rem;
  line-height: normal;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2.2rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const TextLink = styled.p`
  color: #aaa;
  font-size: 18px;
  text-decoration: none;
  margin-right: 3rem;
  color: ${({ active }) => (active === 'true' ? '#fff' : '#aaa')};
  cursor: pointer;
  transition: color 0.1s linear;

  &:hover {
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-right: 2rem;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  width: 3.2rem;
  height: 3.2rem;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  padding: 1rem;
  width: 10rem;
  top: 3.2rem;
  right: 1rem;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 1rem;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: #fff;
  border: 1px solid #fff;
  transition: width 0.5s;
  height: 3rem;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active ? '1rem' : '0')};
  padding: ${({ active }) => (active ? '0 1rem' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '20rem' : '0')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 1.6rem;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  padding: 1rem 2rem;
  border-radius: 5px;
  max-width: 130px;
  font-weight: 600;
  font-size: 2rem;
  margin-top: 1rem;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;
