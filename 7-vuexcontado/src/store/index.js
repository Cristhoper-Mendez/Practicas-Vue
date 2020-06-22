import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'Apple', cantidad: 0},
      {nombre: 'Peach', cantidad: 0},
      {nombre: 'Orange', cantidad: 0},
  ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(items => {
        items.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
