import styled from 'styled-components/macro';

export const Container = styled.footer`
  display: flex;
  padding: 7rem 1.5rem 5rem;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 7rem 3rem;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #757575;
  margin-bottom: 4rem;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;
