<template>
  <v-app>
    <Navbar v-if="user != ''"></Navbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapState } from "vuex";

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  methods:{
    
  },
  computed:{
    ...mapState(['user'])
  }
};
</script>
