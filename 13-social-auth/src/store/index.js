import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from "@/firebase";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    newUser(state, payload){
      if(payload === null){
        state.user = ''
      } else {
        state.user = payload
      }
    }
  },
  actions: {
    async setUser({commit}, user){
db
      try {
        const doc = await db.collection('users').doc(user.uid).get()
        if(doc.exists){
          commit('newUser', doc.data())
        } else {
          const saveUser = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL
          }
          await db.collection('users').doc(saveUser.uid).set(
            saveUser
          )
          console.log('Save');
          commit('newUser', saveUser)
        }
        
      } catch (error) {
        console.log(error)
      }


      
    },
    logout({commit}){
      auth.signOut()
      commit('newUser', null)
      router.push({name: 'Login'})
    }
  },
  modules: {
  }
})
