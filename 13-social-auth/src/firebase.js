var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');

var firebaseConfig = {
    apiKey: "AIzaSyDydAfuLGd517LhLBLvwyNpu5NYtsfjps8",
    authDomain: "social-auth-9f5ee.firebaseapp.com",
    databaseURL: "https://social-auth-9f5ee.firebaseio.com",
    projectId: "social-auth-9f5ee",
    storageBucket: "social-auth-9f5ee.appspot.com",
    messagingSenderId: "407173193165",
    appId: "1:407173193165:web:3ad6094dd218f8a72a7884"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}