<template>
    <div>
        <v-row :class="`d-flex justify-center mt-5`">
            <v-col xs="12" sm="6" >
                <v-card>
                    <v-card-text class="display-1 text-uppercase white--text text-center" :class="register ? 'success' : 'primary' ">
                        <span v-if="!register">Login</span>
                        <span v-if="register">Register</span>
                    </v-card-text>
                    <v-card-text>
                        <v-btn block color="error" dark @click="facebook">Facebook <v-icon right dark>fab fa-facebook-f</v-icon></v-btn>
                        <v-btn block color="info" @click="google">Google <v-icon right dark>fab fa-google</v-icon></v-btn>
                    </v-card-text>
                    <v-card-text v-if="!register">
                        <v-btn block="" @click="register = !register">Have not account?</v-btn>
                    </v-card-text>
                    <v-card-text v-if="register">
                        <v-btn block="" @click="register = !register">Have account</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>

import { firebase, auth, db } from "@/firebase";
import { mapMutations, mapActions } from "vuex";
import router from "@/router";

export default {
    name: 'Login',
    data(){
        return{
            register: false
        }
    },
    methods:{
        ...mapMutations(['newUser']),
        ...mapActions(['setUser']),
        facebook(){
            console.log('facebook');
            const provider = new firebase.auth.FacebookAuthProvider();
            this.login(provider);
        },
        google(){
            var provider = new firebase.auth.GoogleAuthProvider();
            this.login(provider);    
            
        },
        async login(provider){
            firebase.auth().languageCode = 'es';
            try {
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;
                
                this.setUser(user)
                
                
                router.push({name: 'Home'})
                
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}
</script>