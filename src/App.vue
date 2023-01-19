<template>
  <v-app>
    <Nav/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav.vue';

export default defineComponent({
  name: 'App',
  components:{
    Nav
  },

  data () {
    return {
      //
    }
  },
})
</script>
