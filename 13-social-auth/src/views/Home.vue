<template>
  <div>
    <h1>Home</h1>
    <h2>Welcome user {{ user.name }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    ...mapState(['user'])
  }
}
</script>
