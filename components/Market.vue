<template>
  <l-marker :lat-lng="[location.lat, location.lng]" :title="location.title">
    <l-popup>
      <div class="description">
        {{ location.description }}
      </div>
      <a :href="`/locations/${location.id}`">
        read more
      </a>
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
