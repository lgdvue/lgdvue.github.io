import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Market from '@/components/Market.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Market', () => {
  it('renders', () => {
    const location = {
      id: 1,
      lat: '40.000',
      lng: '-2.000',
      title: 'title',
      description: 'description',
      image: 'image'
    }
    const wrapper = shallowMount(Market, {
      propsData: {
        location: location
      },
      stubs: ['nuxt-link', 'l-popup', 'l-marker']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.props().location.id).toBe(1)
    expect(wrapper.props().location.lat).toBe('40.000')
    expect(wrapper.props().location.lng).toBe('-2.000')
    expect(wrapper.props().location.title).toBe('title')
    expect(wrapper.props().location.description).toBe('description')
    expect(wrapper.props().location.image).toBe('image')
  })
})
