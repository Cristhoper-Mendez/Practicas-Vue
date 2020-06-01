<template>
  <v-app>
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'Grid'}">Grid</router-link>
    </div>
    <v-content>
      <v-container>

        

        <v-dialog
          v-model="loading.estado"
          hide-overlay
          persistent
          width="300"
        >
        <v-card
          color="primary"
          dark
        >
        <v-card-text>
          {{loading.titulo}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
        </v-card>
        </v-dialog>

        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    ...mapState(['loading'])
  }
};
</script>
