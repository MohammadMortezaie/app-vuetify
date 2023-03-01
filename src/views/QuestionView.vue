<template>

  <v-card>
    <v-toolbar color="cyan" dark flat app>
      <v-tabs v-model="tab" fixed-tabs background-color="blue-grey darken-4" color="orange" show-arrows>
        <v-tabs-slider color="orange"></v-tabs-slider>

        <v-tab v-for="tabItems in tabList" :key="tabItems">
          {{ tabItems }}
        </v-tab>

      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(tabItems, index) in tabList" :key="tabItems">

        <StepsView v-if="(index == 0)" :items="algoritms" />
        <CodeView v-if="(index != 0 && index != (tabList.length - 1))" :items="codesList" />
        <CommentsView v-if="(index != 0 && index == (tabList.length - 1))" :items="commentsList" />

      </v-tab-item>
    </v-tabs-items>


  </v-card>

</template>
<script>
import StepsView from './questions/StepsView.vue'
import CommentsView from './questions/CommentsView.vue'
import CodeView from './questions/CodeView.vue'
export default {
  data() {
    return {
      tab: null,
      tabList: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      algoritms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      commentsList: [
        {
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
        },
        {
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: 'me, Scrott, Jennifer',
        },
        {
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
        },
        {
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
        },
        {
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
        },
      ],
      codesList: {
        code: `
        const express = require('express')
const cors = require("cors");
const app = express()
const PORT = 3000
var corsOptions = {
        `,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      },

    }
  },
  components: {
    StepsView,
    CommentsView,
    CodeView
  },
}
</script>