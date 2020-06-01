<template>
    <div>
        <h1>List of tasks</h1>
        <ul class="list-group mt-5">
            <router-link :to="{name: 'add'}">
                <button class="btn btn-success btn-block">Add</button>
            </router-link>
            <li v-for="task of tasks" :key="task.id" class="list-group-item">
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
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTasks', 'deleteTask'])
    },
    created(){
        this.getTasks()
    },
    computed: {
        ...mapState(['tasks'])
    }
}
</script>