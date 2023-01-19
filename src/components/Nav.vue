<template>
    <v-card>
      <v-icon icon="md:home" ></v-icon>
      
        <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list density="compact" nav>
            <v-list-item> <v-icon icon="md:home" />Home</v-list-item>
          </v-list>
        </v-navigation-drawer>
  
      </v-layout>
    </v-card>
</template>


<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'Nav',
    data(){
        return{
            //
        }
    }
})


</script>