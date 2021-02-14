import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 2.2rem;
  height: 2.2rem;
  opacity: 0.3;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 1rem;
    top: 0;
    content: ' ';
    height: 2.2rem;
    width: 2px;
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 11.5rem;
  height: 4.5rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  font-size: 1.8rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #ff0a16;
  }
`;
