import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDpeWWXC53Jjv9Wq9y_kbxnUm55Zkjh8g0",
    authDomain: "calendar-d6f18.firebaseapp.com",
    databaseURL: "https://calendar-d6f18.firebaseio.com",
    projectId: "calendar-d6f18",
    storageBucket: "calendar-d6f18.appspot.com",
    messagingSenderId: "256507499202"
  };
firebase.initializeApp(config);

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
