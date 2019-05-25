<template>
  <div>
    <Metas />
    {{ location }}
  </div>
</template>

<script>
import axios from 'axios'
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  async asyncData({ params }) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    )
    const location = res.data

    return {
      location: location
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
