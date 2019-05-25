<template>
  <v-card 
    class="card"
    :to="`/locations/${location.id}`"
  >
    <v-card-title 
      primary-title
    >
      <h3
        class="title mb-3 font-weight-medium"
      >
        {{ location.title }}
      </h3>
    </v-card-title>
  </v-card>
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

<style lang="scss">
</style>
