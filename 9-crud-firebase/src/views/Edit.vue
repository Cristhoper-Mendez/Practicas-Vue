<template>
    <div>
        <h1>Edit</h1>
        {{ id }} - {{ task }}
        <form @submit.prevent="editTask(task)" >
            <!-- <input type="text" >
            <button type="submit">Edit</button> -->
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    </div>
                <input type="text" class="form-control" v-model="task.name">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Add</button>
        </form>

            

    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getTask','editTask'])
    },
    created(){
        this.getTask(this.id)
    },
    computed:{
        ...mapState(['task'])
    }
}
</script>