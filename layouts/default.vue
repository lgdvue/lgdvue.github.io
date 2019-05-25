<template>
  <v-app>
    <!--
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <Logo />
      <v-divider />
      <Navigation />
    </v-navigation-drawer>
    -->
    <v-toolbar
      fixed
      dense
      app
    >
      <!--
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      />
      -->
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
      <ToTop />
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
// import Logo from '@/components/Layout/Logo'
// import Navigation from '@/components/Layout/Navigation'
import ToTop from '@/components/Layout/ToTop'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    // Logo,
    // Navigation,
    ToTop,
    Footer
  },
  data() {
    return {
      drawer: true
    }
  }
}
</script>
