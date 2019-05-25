import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Map from '@/components/Map.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Map', () => {
  it('renders', () => {
    const locations = [
      {
        id: 1,
        lat: '40.000',
        lng: '-2.000',
        title: 'title',
        description: 'description',
        image: 'image'
      }
    ]
    const wrapper = shallowMount(Map, {
      propsData: {
        locations: locations
      },
      stubs: ['nuxt-link', 'l-map', 'l-tile-layer', 'no-ssr']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.props().locations.length).toBe(1)
  })
})
