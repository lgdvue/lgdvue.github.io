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
        <Map :locations="location" />
      </v-flex>
      <v-flex
        sm12
        md4
      >
        {{ location }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Map from '@/components/Map'

export default {
  components: {
    Map
  },
  async asyncData({ params }) {
    const res = await axios.get(
      `https://pinkfilm.dev/api/locations/${params.id}`
    )
    const location = [res.data]

    return {
      location: location
    }
  }
}
</script>
