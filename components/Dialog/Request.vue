<template>
  <div>
    <v-layout row justify-center>
      <v-btn color="primary" dark @click="dialog = true">
        Request location
      </v-btn>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>
              Request location
            </v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn dark flat @click="dialog = false">
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-list three-line subheader>
              <v-subheader>Data</v-subheader>
            </v-list>
            <form @submit.prevent="submit">
              <v-card-text>
                <v-container fluid grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="request.name"
                        label="Name*"
                        required
                      />
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="request.surname"
                        label="Surname*"
                        required
                      />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="request.email"
                        label="Email*"
                        required
                      />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="request.phone"
                        label="Phone*"
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
            <v-divider />
          </v-card-text>
          <div style="flex: 1 1 auto;" />
        </v-card>
      </v-dialog>
    </v-layout>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'New',
  data() {
    return {
      dialog: false,
      request: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submit() {
      axios
        .post('https://pinkfilm.dev/api/reservations/', this.request)
        .then(() => {
          this.dialog = false
        })
    }
  }
}
</script>
