import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'
var firebase = require("firebase/app");
//additional options
require("firebase/auth");
require('firebase/firestore')

// Your web app's Firebase configuration
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

//Vue settings
Vue.config.productionTip = false

//Detect user active
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch('detectUser', {email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectUser', null)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

export default db