import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 16.5rem 4.5rem;
  z-index: 1;

  @media (max-width: 991px) {
    padding: 10rem 2rem;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 5rem;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 2.6rem;
  margin: 1.6rem auto;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Disclaimer = styled.p`
  font-size: 1.9rem;
  text-align: center;
  color: #fff;
`;
