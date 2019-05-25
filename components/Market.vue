<template>
  <l-marker :lat-lng="[location.lat, location.lng]" :title="location.title">
    <l-popup>
      <div class="description">
        {{ location.description }}
      </div>
      <nuxt-link :to="`/locations/${location.id}`">
        read more
      </nuxt-link>
    </l-popup>
  </l-marker>
</template>

<script>
export default {
  name: 'Location',
  props: {
    location: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
