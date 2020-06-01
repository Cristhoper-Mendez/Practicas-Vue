import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyA79lVrF4lOlLwanPX9JJJi1cyn78ZnmuM",
  authDomain: "crud-firebase-vue-257d3.firebaseapp.com",
  databaseURL: "https://crud-firebase-vue-257d3.firebaseio.com",
  projectId: "crud-firebase-vue-257d3",
  storageBucket: "crud-firebase-vue-257d3.appspot.com",
  messagingSenderId: "437991048793",
  appId: "1:437991048793:web:712aaca482560b5fe31348"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

  export default db