<template>
  <div>
    <Map :locations="locations" />
    <New />
  </div>
</template>

<script>
import axios from 'axios'
import Map from '@/components/Map'
import New from '@/components/Dialog/New.vue'

export default {
  components: {
    Map,
    New
  },
  async asyncData() {
    const res = await axios.get('https://pinkfilm.dev/api/locations')
    const locations = res.data

    return {
      locations: locations
    }
  }
}
</script>
