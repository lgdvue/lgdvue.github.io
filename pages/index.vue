<template>
  <v-container
    class="index"
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex 
        xs12
        sm8
      >
        <Metas />
        <v-form class="form-search">
          <v-text-field prepend-icon="search" name="search" label="Search" type="text" />                
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  }
}
</script>

<style lang="scss" scoped>
.index {
  background: url(https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg);
  .form-search {
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 25px;
  }
}
</style>
