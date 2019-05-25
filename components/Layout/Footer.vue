<template>
  <v-layout
    justify-center
    row
    wrap
  >
    <v-flex
      primary
      darknes-2
      py-3
      text-xs-center
      white--text
      xs12
    >
      <div class="mb-3 text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          rel="noopener noreferrer"
          target="_blank"
          dark
          icon
        >
          <v-icon>
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </div>
      {{ new Date().getFullYear() }} - Pink Film
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/losgananesdevue'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
