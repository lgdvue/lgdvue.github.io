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
        v-for="location in locations"
        :key="location.slug"
        xs12
        sm6
        md4
        lg3
      >
        <Location
          :location="location"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Location from '@/components/Location'

export default {
  components: {
    Location
  },
  async asyncData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const locations = res.data

    return {
      locations: locations
    }
  },
  head() {
    return {
      title: 'Locations'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
