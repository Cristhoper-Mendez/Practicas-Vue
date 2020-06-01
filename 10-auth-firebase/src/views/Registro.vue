<template>
    <div>
        <h1>res</h1>
        <form @submit.prevent="nuevoUsuario({email:email, password:pass1})">
            <input type="email" v-model="$v.email.$model" placeholder="Email" class="form-control m-2">
            <small class="text-danger d-block" v-if="!$v.email.email">Email is invalid</small>
            <small class="text-danger d-block" v-if="!$v.email.required">Email is required</small>
            
            <input type="password" v-model="pass1" placeholder="Password" class="form-control m-2">
            <small class="text-danger d-block" v-if="!$v.pass1.minLength">Minimum 6 characters</small>

            <input type="password" v-model="pass2" placeholder="Confirm password" class="form-control m-2">
            <small class="text-danger d-block" v-if="!$v.pass2.sameAs">Password not match</small>

            <button type="submit" :disabled="!desactivar" class="btn btn-info">Create user</button>
        </form>
        <p v-if="error">Email is already taken</p>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Resgistro',
    data(){
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    methods: {
        ...mapActions(['nuevoUsuario'])
    },
    computed: {
        ...mapState(['error']),
        desactivar(){
            return this.pass1 === this.pass2 && this.pass1 != ''
        }
    },
    validations:{
        email:{email,required},
        pass1:{minLength:minLength(6)},
        pass2:{sameAs:sameAs('pass1')}
    }
}
</script>