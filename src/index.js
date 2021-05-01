import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyD_L2dzyD5bvVKAGo7slZ5EyfY0Hz2TpCc",
  authDomain: "note-x-60d96.firebaseapp.com",
  projectId: "note-x-60d96",
  storageBucket: "note-x-60d96.appspot.com",
  messagingSenderId: "476472614641",
  appId: "1:476472614641:web:cac510ec892070be6ad350"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
