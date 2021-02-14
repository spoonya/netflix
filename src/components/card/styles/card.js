import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 2.4rem;
  color: #e5e5e5;
  font-weight: 600;
  margin-left: 5.6rem;
  margin-right: 5.6rem;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 3rem;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 5.6rem;

    @media (max-width: 1000px) {
      margin-left: 3rem;
    }
  }

  &:last-of-type {
    margin-right: 5.6rem;

    @media (max-width: 1000px) {
      margin-right: 3rem;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 1.8rem;
  color: #fff;
  font-weight: ${({ fontWeight }) => (fontWeight === '600' ? '600' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 2.2rem;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 36rem;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000;
  position: relative;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

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

    ${Title} {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 1rem;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;

  img {
    filter: brightness(0) invert(1);
    width: 2.4rem;
  }
`;

export const Content = styled.div`
  margin: 5.6rem;
  max-width: 500px;
  line-height: normal;
  z-index: 1;

  @media (max-width: 1000px) {
    margin: 3rem;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  color: #fff;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 1rem;
  font-size: 12px;
`;
