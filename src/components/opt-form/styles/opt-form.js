import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 1rem;
  max-height: 6rem;
  background: #fff;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;

  @media (max-width: 1000px) {
    margin-bottom: 1rem;
    border-radius: 2px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  min-height: 6rem;
  background: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 1em;
  font-size: 2.6rem;
  transition: 0.1s background-color linear;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    max-height: 4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 2px;
  }
`;

export const Text = styled.p`
  font-size: 1.9rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.6rem;
    line-height: 1.2;
  }
`;
