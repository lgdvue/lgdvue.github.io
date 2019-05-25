<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn
          style=" z-index: 99999"
          fab
          dark
          fixed
          bottom
          right
          @click.stop="dialog = true"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <v-card>
        <form @submit.prevent="submit">
          <v-card-title>
            <span class="headline">New location</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="location.lat"
                    label="Lat*"
                    required
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="location.lng"
                    label="Lng*"
                    required
                  />
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="location.title"
                    label="Title"
                    required
                  />
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="location.description"
                    label="Description"
                    required
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['House', 'Street']"
                    label="Type*"
                    required
                  />
                </v-flex>
              </v-layout>
            </v-container>
            <small>* required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="pink lighten-1" flat @click="dialog = false">
              Close
            </v-btn>
            <v-btn type="submit" color="pink darken-1" dark>
              Save
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'New',
  data() {
    return {
      dialog: false,
      location: {
        lat: '',
        lng: '',
        title: '',
        description: '',
        type: ''
      }
    }
  },
  methods: {
    submit() {
      axios
        .post('https://pinkfilm.dev/api/locations/', this.location)
        .then(() => {
          this.dialog = false
        })
    }
  }
}
</script>
