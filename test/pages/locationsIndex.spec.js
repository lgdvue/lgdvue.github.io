import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import LocationsIndex from '@/pages/locations/index.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('LocationsIndex', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(LocationsIndex)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
