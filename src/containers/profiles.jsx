import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export default function SelectProfileContainer(props) {
  const { user, setProfile } = props;

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="images/misc/logo.png"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} alt="User picture" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
