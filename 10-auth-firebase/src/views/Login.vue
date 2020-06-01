<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser({email:$v.email.$model, password:$v.password.$model})">
            <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="email">
            <small v-if="!$v.email.email" class="text-danger d-block">Email invalid</small>
            <input type="password" v-model="$v.password.$model" class="form-control my-2" placeholder="password">
            <small v-if="!$v.password.minLength" class="text-danger d-block">Password is too small</small>
            <small v-if="!$v.password.required" class="text-danger d-block">Password is required</small>
            <button type="submit" class="btn btn-info" :disabled="$v.$invalid">Login</button>
        </form>
        <p v-if="error">Email or passwor incorrect</p>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['loginUser'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations: {
        email: {required, email},
        password: {required, minLength:minLength(6)}
    }
}
</script>