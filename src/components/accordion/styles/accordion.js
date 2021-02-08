import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4rem 4.5rem;
  flex-direction: column;
  margin: auto;
  width: 67%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 4rem 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8em 1.2em;
  border-bottom: 1px solid #000;
  background: #303030;
  user-select: none;
  font-size: 2.6rem;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 1.2em;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  &.open {
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
