import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
var firebase = require('firebase/app')
import db from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    error: '',
    tasks: [],
    task: {name: '', id: ''},
    carga: false,
    search: ''
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setTasks(state, tareas){
      state.tasks = tareas
    },
    setTask(state, task){
      state.task = task
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter( doc => {
        return doc.id != id
      } )
    },
    cargaFirebase(state, payload){
      state.carga = payload
    }
  },
  actions: {
    Search({commit, state}, payload){
      console.log(payload)
      state.search = payload.toLowerCase();
    },
    nuevoUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then(res => {
        console.log(res);
        commit('setUser', {email: res.user.email, uid: res.user.uid})
        db.collection(res.user.email).add({
          name: 'Example of task'
        })
        .then(() => {
          router.push({name: 'Home'})
        })
        // .catch(err => {
        //   console.log(err.message);
        //   commit('setError', err.message)
        // })
      })
      .catch(err => {
        console.log(err.message);
        commit('setError', err.message)
      })
    },
    loginUser({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then( res => {
          console.log(res);
          commit('setUser', {email: res.user.email, uid: res.user.uid})
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err.message);
          commit('setError', err.message)
        })
    },
    detectUser({commit}, payload){
      if(payload != null){
        commit('setUser', {email: payload.email, uid: payload.uid})
      } else {
        commit('setUser', null)
      }
    },
    logout({commit}){
      firebase.auth().signOut()
      commit('setUser', null)
      router.push({name: 'Login'})
    },
    getTasks({commit}){

      commit('cargaFirebase', true);

      const user = firebase.auth().currentUser
      const tasks = []
      db.collection(user.email).get()
       .then(snapshot => {
         snapshot.forEach( doc => {
           //console.log(doc.id);
           //console.log(doc.data()); 
           let task = doc.data();
           task.id = doc.id
           tasks.push(task)
         })
         commit('cargaFirebase', false);
       })
       commit('setTasks', tasks)
    },
    getTask({commit}, id){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(id).get()
      .then(doc => {
        //console.log(doc.id);
        //console.log(doc.data());
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
    },
    editTask({commit}, task){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(task.id).update({
        name: task.name
      })
      .then(() => {
        router.push({name: 'Home'})
      })
    },
    addTask({commit}, name){
      commit('cargaFirebase', true);
      const user = firebase.auth().currentUser
      db.collection(user.email).add({
        name: name
      })
      .then(doc => {
        console.log(doc.id);
        router.push({name: 'Home'})
        commit('cargaFirebase', false);
      })
    },
    deleteTask({commit}, id){
      const user = firebase.auth().currentUser
      db.collection(user.email).doc(id).delete()
      .then(() => {
        console.log('Task deleted');
        commit('deleteTask', id)
      })
    }
  },
  modules: {
  },
  getters: {
    existUser(state){
      if(state.user === null || state.user === '' || state.user === undefined){
        return false
      } else {
        return true
      }
    },
    filt(state){
      let array = []
      for(let task of state.tasks){
        let name = task.name.toLowerCase();
        if(name.indexOf(state.search) >= 0){
          array.push(task)
          console.log('')
        }
      }
      return array;
    }
  }
})
