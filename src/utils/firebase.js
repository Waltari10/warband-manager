import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

export let config;

if (process.env.REACT_APP_ENVIRONMENT === 'DEVELOPMENT') {
  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'simple-reflect-dev-34813.firebaseapp.com',
    databaseURL: 'https://simple-reflect-dev-34813.firebaseio.com',
    projectId: 'simple-reflect-dev-34813',
    storageBucket: 'simple-reflect-dev-34813.appspot.com',
    messagingSenderId: '809756491978',
    appId: '1:809756491978:web:158a9f212c0c74c6f1b433',
    measurementId: 'G-20YXD6RDC6',
  };
} else if (process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'simple-reflect-8559d.firebaseapp.com',
    databaseURL: 'https://simple-reflect-8559d.firebaseio.com',
    projectId: 'simple-reflect-8559d',
    storageBucket: 'simple-reflect-8559d.appspot.com',
    messagingSenderId: '135611553354',
    appId: '1:135611553354:web:b315a463fce22672e3f8b3',
    measurementId: 'G-1P1PD89FYW',
  };
}


firebase.initializeApp(config);

firebase.analytics();

export const db = firebase.firestore();

export default firebase;