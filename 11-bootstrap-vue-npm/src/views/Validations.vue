<template>
    <div class="mt-5">
        <h1>Vuelidate</h1>
        <form @submit.prevent="submit">
            <input type="email" placeholder="Email" class="form-control my-3" v-model.lazy="$v.email.$model"
            :class="{'is-invalid': $v.email.$error}">
            <p v-if="!$v.email.email">This email is incorrect</p>
            <p v-if="!$v.email.required">The email is required</p>
            <!-- <p>{{$v.email}}</p> -->
            <!-- <p>Opcional agregar lazy al v-model para hacer una espera antes de la validacion</p> -->
            <input type="password" placeholder="Password" class="form-control my-3" v-model="$v.password.$model"
                :class="{'is-invalid': $v.password.$error}">
            <p v-if="!$v.password.minLength">Minimumn 6 characters</p>
            <!-- <p>{{$v.password}}</p> -->
            <input type="password" placeholder="Repeat password" class="form-control my-3" v-model.lazy="$v.repeatPassword.$model"
                :class="{'is-invalid': $v.repeatPassword.$error}">
            <p v-if="!$v.repeatPassword.sameAsPassword">Passwords do not match</p>
            <!-- <p>{{$v.repeatPassword}}</p> -->
            <b-button variant="primary" type="submit" :disabled="$v.$invalid">Send</b-button>
            <!-- <p>{{$v}}</p> -->
        </form>
    </div>
</template>

<script>

import { required, email, sameAs, minLength } from "vuelidate/lib/validators";

export default {
    name: 'Validations',
    data(){
        return{
            email: '',
            password: '',
            repeatPassword: ''

        }
    },
    validations:{
        email:{required,email},
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword:{
            sameAsPassword: sameAs('password')
        }
    },
    methods:{
        submit(){
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                // this.submitStatus = 'ERROR'
                console.log('ERROR')
            } else {
            // do your submit logic here
                // this.submitStatus = 'PENDING'
            setTimeout(() => {
                // this.submitStatus = 'OK'
                console.log('CORRECTO')
                console.log('Sendind  ' + this.$v.email.$model + ' ' + this.$v.password.$model)
            }, 500)
            }
        }
    }
}
</script>