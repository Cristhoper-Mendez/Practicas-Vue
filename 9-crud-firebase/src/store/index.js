import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {name: '', id: ''}
  },
  mutations: {
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
    }
  },
  actions: {
    getTasks({commit}){
      const tasks = []
      db.collection('tasks').get()
       .then(snapshot => {
         snapshot.forEach( doc => {
           //console.log(doc.id);
           //console.log(doc.data()); 
           let task = doc.data();
           task.id = doc.id
           tasks.push(task)
         })
       })
       commit('setTasks', tasks)
    },
    getTask({commit}, id){
      db.collection('tasks').doc(id).get()
      .then(doc => {
        //console.log(doc.id);
        //console.log(doc.data());
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
    },
    editTask({commit}, task){
      db.collection('tasks').doc(task.id).update({
        name: task.name
      })
      .then(() => {
        router.push({name: 'inicio'})
      })
    },
    addTask({commit}, name){
      db.collection('tasks').add({
        name: name
      })
      .then(doc => {
        console.log(doc.id);
        router.push({name: 'inicio'})
      })
    },
    deleteTask({commit}, id){
      db.collection('tasks').doc(id).delete()
      .then(() => {
        console.log('Task deleted');
        commit('deleteTask', id)
      })
    }
  },
  modules: {
  }
})


/*

  


        db.collection("tasks").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
*/