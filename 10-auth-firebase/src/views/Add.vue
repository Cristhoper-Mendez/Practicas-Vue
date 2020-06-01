<template>
    <div>
        <h1>Add task</h1>
        <form @submit.prevent="addTask($v.name.$model)" class="form-inline">
            <!-- <input type="text" v-model="name"> -->
            <!-- <button type="submit">Add</button> -->
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    </div>
                <input type="text" class="form-control" v-model="$v.name.$model">
            </div>
            <button type="submit" class="btn btn-primary mb-2" :disabled="$v.$invalid || carga">Add</button>
        </form>
            <small class="text-danger d-block" v-if="!$v.name.required">required</small>
            <small class="text-danger d-block" v-if="!$v.name.minLength">minimo 5</small>
        
    </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

import {mapActions, mapState} from 'vuex'
export default {
    name: 'Add',
    data(){
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask'])
    },
    validations:{
        name:{required, minLength:minLength(5)}
    },
    computed:{
        ...mapState(['carga'])
    }
}
</script>