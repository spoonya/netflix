import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

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

export const Frame = styled.div``;

export const Container = styled.div`
  display: flex;
  margin: 0 4.6rem;
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

  @media (max-width: 1000px) {
    max-width: 12rem;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  transition: 0.1s background-color linear;

  &:hover {
    background: #f40612;
  }
`;
