<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex 
        xs12
        sm8
        md4
      >
        <Metas />
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <form @submit.prevent="submit">
              <v-text-field prepend-icon="person" name="login" label="Login" type="text" />
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" />
            </form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      axios
        .post('https://jsonplaceholder.typicode.com/todos/', this.user)
        .then(() => {
          // ToDo
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
