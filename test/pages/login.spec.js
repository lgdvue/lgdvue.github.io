import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Login from '@/pages/login.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Login', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
