// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVX0pZLaXpbNky3A3XX8Ysxf24CFhmIYQ",
    authDomain: "infinity-mart-10fe8.firebaseapp.com",
    projectId: "infinity-mart-10fe8",
    storageBucket: "infinity-mart-10fe8.appspot.com",
    messagingSenderId: "540203642377",
    appId: "1:540203642377:web:2ee0745172aa8aa999d2d8",
    measurementId: "G-R8VSNGME0M"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };