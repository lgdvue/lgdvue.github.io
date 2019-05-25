<template>
  <v-list>
    <template v-for="item in navigation">
      <v-list-tile :key="item.link" :to="item.link">
        <v-list-tile-action>
          <v-icon v-text="item.icon" />
        </v-list-tile-action>
        <v-list-tile-title v-text="item.title" />
      </v-list-tile>
      <v-list-tile v-for="subitem in item.items" :key="subitem.title" :to="subitem.link">
        <v-list-tile-action>
          <v-icon />
        </v-list-tile-action>
        <v-list-tile-title v-text="subitem.title" />
      </v-list-tile>
      <v-divider :key="item.title" />
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    navigation: [
      {
        title: 'Home',
        icon: 'dashboard',
        link: '/'
      }
      /*
      {
        title: 'Cuenta',
        icon: 'folder',
        link: '/dashboard',
        items: [
          { title: 'Crear', link: '/dashboard/create' },
          { title: 'Editar', link: '/dashboard/edit' },
          { title: 'Borrar', link: '/dashboard/delete' }
        ]
      }
      */
    ]
  })
}
</script>

<style lang="scss" scope>
</style>
