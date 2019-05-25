<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      Menu
    </v-navigation-drawer>
    <v-toolbar fixed dense app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app fixed absolute inset height="auto">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: null
    }
  }
}
</script>
