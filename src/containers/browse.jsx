import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import { FirebaseCtx } from '../context/firebase';
import { Header, Loading } from '../components';

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseCtx);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <p>fdggf</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
