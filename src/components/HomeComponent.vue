<template>
  <v-icon>mdi-minus</v-icon>


  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-icon icon="mdi:mdi-minus" />

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify 3 Beta
        </h1>


        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>


      </v-col>
    </v-row>
  </v-container>
    

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeComponent',

    data(){
        return{
            //
        }
    }
})


</script>