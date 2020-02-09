import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

export const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'pain-lessons.firebaseapp.com',
  databaseURL: 'https://pain-lessons.firebaseio.com',
  projectId: 'pain-lessons',
  storageBucket: 'pain-lessons.appspot.com',
  messagingSenderId: '505852011185',
  appId: '1:505852011185:web:f0606da1a38a56a95f7890',
  measurementId: 'G-SGWKBKMV75',
};

firebase.initializeApp(config);

firebase.analytics();

export const db = firebase.firestore();

export default firebase;