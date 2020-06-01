import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require('firebase/app')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "login" */ '../views/Edit.vue'),
    meta: {requiresAuth: true}
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const routeProtected = to.matched.some(record => record.meta.requiresAuth)
  var user = firebase.auth().currentUser;
  if( routeProtected === true && user === null){
    next({name: 'Login'})
  }else {
    next()
  }
})

export default router
