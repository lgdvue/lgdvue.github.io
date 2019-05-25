<template>
  <div id="map-wrap" style="height: 80vh; position: relative; z-index: 1">
    <no-ssr>
      <l-map :zoom="6" :center="[40.4183083, -3.70275]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Market
          v-for="location in locations"
          :key="location.id"
          :location="location"
        />
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
import Market from '@/components/Market'

export default {
  name: 'Map',
  components: {
    Market
  },
  props: {
    locations: {
      type: Array,
      default: () => []
    }
  }
}
</script>
