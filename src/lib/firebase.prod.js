import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDHxkVM_x78p0m7AwV1gc3ZDM4NqcspGqg',
  authDomain: 'netflix-e955e.firebaseapp.com',
  projectId: 'netflix-e955e',
  storageBucket: 'netflix-e955e.appspot.com',
  messagingSenderId: '75643271866',
  appId: '1:75643271866:web:2384ccfe74f7d6fc6e6083',
  measurementId: 'G-R0BJ6GQZF3',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
