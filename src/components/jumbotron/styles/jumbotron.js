import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 5rem 5%;
  color: #fff;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 4.5rem;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Image = styled.img``;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
