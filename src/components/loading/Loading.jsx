import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading(props) {
  const { src } = props;

  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
