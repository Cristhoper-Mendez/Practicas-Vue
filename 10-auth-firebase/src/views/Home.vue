<template>
    <div>
        <h1>List of tasks</h1>
        <router-link :to="{name: 'add'}">
            <button class="btn btn-success btn-block">Add</button>
        </router-link>
        
        <form @submit.prevent="Search(search)">
            <input type="text" placeholder="Search" v-model="search" class="form-control" v-on:keyup="Search(search)">
        </form>

        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando content...</h3>
            <!-- <pulse-loader :loading="carga" ></pulse-loader> -->
            <sync-loader :loading="carga"></sync-loader>
        </div>

        <ul class="list-group mt-5" v-if="!carga">
            <li v-for="task of filt" :key="task.id" class="list-group-item">
                {{ task.name }} - {{ task.id }} 
            <div class="float-right">
                <router-link :to="{name:'edit', params:{id: task.id}}" class="btn btn-warning btn-sm mr-2">
                    Edit
                </router-link>
                <button @click="deleteTask(task.id)" class="btn btn-danger btn-sm">Delete</button>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
    name: 'Home',
    computed: {
        ...mapState(['user', 'tasks', 'carga']),
        ...mapGetters(['filt'])
    },
    methods: {
        ...mapActions(['getTasks', 'deleteTask', 'Search'])
    },
    created(){
        this.getTasks()
    },
    components: {
    PulseLoader,
    SyncLoader
  },
  data(){
      return{
          search: ''
      }
  }
}
</script>