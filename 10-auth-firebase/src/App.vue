<template>
  <div id="app" class="container mg-top5">
    <div id="nav">
      <router-link :to="{name: 'Login'}" v-if="!existUser">Login</router-link> |
      <router-link :to="{name: 'Home'}" v-if="existUser">Home</router-link> |
      <a @click="logout" v-if="existUser">Logout</a>
      <router-link :to="{name: 'Registro'}" v-if="!existUser">Registro</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Home',
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['existUser'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
