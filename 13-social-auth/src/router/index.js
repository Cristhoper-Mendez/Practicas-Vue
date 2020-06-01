import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/firebase";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
router.beforeEach((to, from, next) => {
  //const routeProtected = to.matched.some(record => record.meta.requiresAuth)
  var user = auth.currentUser;
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(user){
      next()
    } else {
      next({name: 'Login'})
    }
  }else {
    next()
  }
})

export default router
