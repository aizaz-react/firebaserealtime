import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjv9ZmmrchWWS37kA-1xb6gDhQixTbX1k",
  authDomain: "dummyfirebaseadmin.firebaseapp.com",
  databaseURL: "https://dummyfirebaseadmin-default-rtdb.firebaseio.com",
  projectId: "dummyfirebaseadmin",
  storageBucket: "dummyfirebaseadmin.appspot.com",
  messagingSenderId: "521208460908",
  appId: "1:521208460908:web:9b07800d204697db38ca49",
  measurementId: "G-Z477NHTR2H"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {app, db}



