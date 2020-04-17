import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/firestore';

export let config;


if (process.env.REACT_APP_ENVIRONMENT === 'DEVELOPMENT') {
  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'mordheim-warbands-dev.firebaseapp.com',
    databaseURL: 'https://mordheim-warbands-dev.firebaseio.com',
    projectId: 'mordheim-warbands-dev',
    storageBucket: 'mordheim-warbands-dev.appspot.com',
    messagingSenderId: '490798770277',
    appId: '1:490798770277:web:89ffbaa14e56d70df7be8c',
    measurementId: 'G-VS4JF17JFB',
  };
} else if (process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'mordheim-warband.firebaseapp.com',
    databaseURL: 'https://mordheim-warband.firebaseio.com',
    projectId: 'mordheim-warband',
    storageBucket: 'mordheim-warband.appspot.com',
    messagingSenderId: '182151255622',
    appId: '1:182151255622:web:8c0ddefdcb13137b77dc47',
    measurementId: 'G-NNGL8XMKMQ',
  };
  firebase.analytics();
}


firebase.initializeApp(config);


export const db = firebase.firestore();

export default firebase;