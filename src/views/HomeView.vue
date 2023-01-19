<template>
  <home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import Home from '../components/HomeComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Home
    //HelloWorld,
  },
});
</script>
