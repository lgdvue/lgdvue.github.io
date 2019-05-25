<template>
  <v-app>
    <v-toolbar
      fixed
      dense
      app
    >
      <nuxt-link v-show="drawer" to="/" class="logo">
        <img height="40px" src="~/static/logo.png">
      </nuxt-link>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          to="/login"
          flat
        >
          Login
          <v-icon right>
            fa-user
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      app
      fixed
      absolute
      inset
      height="auto"
    >
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Footer
  },
  data() {
    return {
      drawer: true
    }
  }
}
</script>
