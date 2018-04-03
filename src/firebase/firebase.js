import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDJJWxkTD9RSdynjMdDtA5-O9_bDNMmSmY',
  authDomain: 'commit-engineering.firebaseapp.com',
  databaseURL: 'https://commit-engineering.firebaseio.com',
  projectId: 'commit-engineering',
  storageBucket: 'commit-engineering.appspot.com',
  messagingSenderId: '190529368964'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
