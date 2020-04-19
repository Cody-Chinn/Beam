// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGpMo72Z69nHy9PiCUBwmh00bLeKw6cGw",
    authDomain: "beam-77021.firebaseapp.com",
    databaseURL: "https://beam-77021.firebaseio.com",
    projectId: "beam-77021",
    storageBucket: "beam-77021.appspot.com",
    messagingSenderId: "1063776961343",
    appId: "1:1063776961343:web:7a43fd6acb03dbdc70898a",
    measurementId: "G-VJ4JB0VWF3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();