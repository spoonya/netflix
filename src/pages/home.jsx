import React from 'react';
import { Feature } from '../components';
import FaqContainer from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import OptFormContainer from '../containers/opt-form';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptFormContainer />
          <Feature.Disclaimer>
            Only new members are eligible for this offer.
          </Feature.Disclaimer>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
