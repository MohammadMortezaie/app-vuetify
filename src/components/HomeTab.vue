<template>
  
  <v-container>
    <v-row>

      <v-col cols="6">
        <v-text-field color="orange" prepend-icon="mdi-magnify" label="Search... "></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-select color="orange" prepend-icon="mdi-blur" :items="tags" label="Filter List"></v-select>
      </v-col>
    </v-row>



    <!-- change id in route -->
    <router-link v-for="(item, index) in 10" :key="index" :to="{ name: 'question', params: { id: 4 } }" 
      style="text-decoration: none; color: inherit;">
      <v-card class="card my-7" color="rgba(255, 255, 255, 0.2)" 
        style="box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);">
        <v-chip class="ml-n2 mt-n1" color="success" label>
          Primary
        </v-chip>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quam pariatur vero explicabo nulla porro.
          Commodi quas quis assumenda fugit dolorum! Perferendis ipsa officia aliquam, assumenda aliquid magnam
          voluptatum nulla.
        </v-card-text><v-divider color="orange"></v-divider>
        <v-card-actions>
          <v-btn text color="orange accent-5">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </router-link>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    level: 'all',
    tags: ['all', 'easy', 'medium', 'hard'],
  }),
})
</script>
