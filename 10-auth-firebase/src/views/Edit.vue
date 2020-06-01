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
                <input type="text" class="form-control" v-model="$v.task.name.$model">
            </div>
            <button type="submit" class="btn btn-primary mb-2"
                :disabled="$v.task.$invalid">Add</button>
        </form>
        <small class="text-danger" v-if="!$v.task.name.required">Required</small>
        <!-- {{$v.task.name}} -->

            

    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
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
    },
    validations:{
        task:{
            name:{required}
        }
    }
}
</script>