import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBQaJY878XMgqk8LA0Z87D9tTe2j9xtYaQ",
	authDomain: "nasha-ferma.firebaseapp.com",
	projectId: "nasha-ferma",
	storageBucket: "nasha-ferma.appspot.com",
	messagingSenderId: "811210513196",
	appId: "1:811210513196:web:598a5823230024985dea89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
