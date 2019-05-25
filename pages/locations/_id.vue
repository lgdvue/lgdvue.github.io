<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        sm12
        md8
      >
        <Map :locations="locations" />
      </v-flex>
      <v-flex
        sm12
        md4
      >
        <h1>{{ location.title }}</h1>
        <p class="lead">
          {{ location.description }}
        </p>
        <Request />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Map from '@/components/Map'
import Request from '@/components/Dialog/Request.vue'

export default {
  components: {
    Map,
    Request
  },
  async asyncData({ params }) {
    const res = await axios.get(
      `https://pinkfilm.dev/api/locations/${params.id}`
    )
    const location = res.data
    const locations = [location]

    return {
      locations: locations,
      location: location
    }
  }
}
</script>
