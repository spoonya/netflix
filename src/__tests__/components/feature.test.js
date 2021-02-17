import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders the <Feature />', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        <Feature.Disclaimer>
          Only new members are eligible for this offer.
        </Feature.Disclaimer>
      </Feature>,
    );

    expect(getByText('Unlimited movies, TV shows and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(
      getByText('Only new members are eligible for this offer.'),
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
