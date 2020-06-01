<template>
        <nav>
            <v-app-bar
        app
        color="primary"
        dark
        >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="d-flex align-center">
            <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
            />
            <router-link :to="{name: 'Home'}">
                 <!-- class="indigo--text text--darken-2"  -->
            <span class="white--text">Vue</span>
            </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn
        >
            <span class="mr-2" @click="logout">Cerrar sesion</span>
            <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
        </v-app-bar>
        <!-- <v-navigation-drawer v-model="drawer">
            <v-list-item>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>fas fa-address-card</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-item>
        </v-navigation-drawer> -->

        <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary class="primary"
    >
      <v-list-item >
        <v-list-item-avatar>
          <v-img :src="user.photo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{user.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        
        <v-row align="center">
          <v-col></v-col>
        </v-row>

        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <!-- <p>  </p> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'Navbar',
    methods:{
    ...mapActions(['logout'])
    },
    data(){
        return{
            items: [
                { title: 'Home', icon: 'fas fa-address-card', to: {name: 'Home'} },
                { title: 'About', icon: 'fas fa-address-card', to: {name: 'Login'} },
                { title: 'Admin', icon: 'fas fa-address-card', to: {name: 'Admin'} }
            ],
            drawer: true
        }
    },
    computed:{
      ...mapState(['user'])
    }
}
</script>