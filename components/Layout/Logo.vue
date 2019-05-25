<template>
  <div class="logo">
    <nuxt-link to="/">
      <img width="150px" src="~/static/logo.png">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    by: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  padding: 25px 5px;
  text-align: center;
  background: #f5f5f5;
  a {
    text-decoration: none;
    span {
      display: block;
      font-style: italic;
    }
  }
}
</style>
