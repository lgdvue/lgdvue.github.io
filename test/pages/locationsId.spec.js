import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import LocationsId from '@/pages/locations/_id.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('LocationsId', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(LocationsId)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
