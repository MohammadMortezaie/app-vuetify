<template>
  <v-container fluid>
    <v-row dense>

      <template>
        <v-col cols="12" md="6" v-for="n in 4" :key="n">
          <router-link :to="{ name: 'learnList', params: { id: n } }"  style="text-decoration: none; color: inherit;">

            <v-card class=" text-center mx-3 my-3">
              <v-img height="200px" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                <v-card-title v-text="`Column ${n}`"></v-card-title>
              </v-img>
            </v-card>

          </router-link>
        </v-col>
      </template>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LearningTab',

  data: () => ({


  }),
})
</script>
