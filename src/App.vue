<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item-group v-model="selectedItem" color="orange accent-4">
          <v-list-item v-for="(item, i) in listMenu" :key="i" :to="{ name: item.to }" link exact>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar elevation="0" app>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        v-if="$route.name == 'home' || $route.name == 'learning' || $route.name == 'blog' || $route.name == 'about'"
        class="text-start col">Application</v-toolbar-title>
      <v-toolbar-title v-else class="text-start col">
        <v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>
      </v-toolbar-title>

      <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">mdi-theme-light-dark</v-icon>


    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>


  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: null,
    selectedItem: 'home',
    listMenu: [
      {
        'name': 'Home',
        'to': 'home',
        'icon': 'mdi-home'
      },
      {
        'name': 'Blog',
        'to': 'blog',
        'icon': 'mdi-book-open-variant'
      },
      {
        'name': 'Learning',
        'to': 'learning',
        'icon': 'mdi-account-school'
      },
      {
        'name': 'About US',
        'to': 'about',
        'icon': 'mdi-card-account-details-star'
      },
    ]
  }),
});
</script>
<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

body {
  animation: fadeIn .8s;
}
</style>