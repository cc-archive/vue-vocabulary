import { shallowMount } from '@vue/test-utils'

import Shield from '@/elements/Shield/Shield'

describe('Shield.vue', () => {
  const LABEL_EXAMPLE = 'Example'
  const MESSAGE_EXAMPLE = 'Message'

  it('renders the correct message', () => {
    const wrapper = shallowMount(Shield, {
      propsData: {
        message: MESSAGE_EXAMPLE
      }
    })
    expect(wrapper.find('.message').text()).toContain(MESSAGE_EXAMPLE)
  })

  it('renders the correct color', () => {
    const wrapper = shallowMount(Shield, {
      propsData: {
        color: 'red'
      }
    })
    expect(wrapper.find('.shield').classes()).toContain('red-colored')
  })

  it('renders the correct label', () => {
    const wrapper = shallowMount(Shield, {
      propsData: {
        label: LABEL_EXAMPLE
      }
    })
    expect(wrapper.find('.label').text()).toEqual(LABEL_EXAMPLE)
  })

  it('renders the correct indication', () => {
    const wrapper = shallowMount(Shield, {
      propsData: {
        indication: 'positive'
      }
    })
    expect(wrapper.find('.positive-indication')).toBeTruthy()
  })

  it('works correctly with lowercase-set', () => {
    const wrapper = shallowMount(Shield, {
      propsData: {
        lowercaseSet: [false, true]
      }
    })
    expect(wrapper.find('.label').classes()).not.toContain('lowercased')
    expect(wrapper.find('.message').classes()).toContain('lowercased')
  })
})
