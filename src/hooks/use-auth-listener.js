import { useState, useEffect, useContext } from 'react';
import { FirebaseCtx } from '../context/firebase';

export default function useAuthListener() {
  const userItem = 'netflix-authUser';
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(userItem)));
  const { firebase } = useContext(FirebaseCtx);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(userItem, JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem(userItem);
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
