<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex 
        xs12
      >
        <Metas />
        <!--
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Create location</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <form>
              <v-text-field
                v-model="name"
                v-validate="'required|max:10'"
                :counter="10"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                v-validate="'required|email'"
                label="E-mail"
                data-vv-name="email"
                required
              ></v-text-field>
              <v-select
                v-model="select"
                v-validate="'required'"
                :items="items"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                v-validate="'required'"
                value="1"
                label="Option"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>
            </form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-card-actions>
        </v-card>
        -->
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
</style>
