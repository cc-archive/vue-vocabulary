import { shallowMount } from '@vue/test-utils'

import Shield from '@/elements/Shield/Shield'

describe('Shield.vue', () => {
  const LABEL_EXAMPLE = 'Example'
  const MESSAGE_EXAMPLE = 'Message'
  const COLOR = 'red'
  const INDICATION = 'positive'

  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {}
    }
  })

  function getWrapper () {
    return shallowMount(Shield, defaultConfig)
  }

  it('renders the correct message', () => {
    defaultConfig.propsData.message = MESSAGE_EXAMPLE
    const wrapper = getWrapper()
    expect(wrapper.find('.message').text()).toContain(MESSAGE_EXAMPLE)
  })

  it('works correctly with lowercase-set', () => {
    defaultConfig.propsData.lowercaseSet = [false, true]
    const wrapper = getWrapper()
    expect(wrapper.find('.label').classes()).not.toContain('lowercased')
    expect(wrapper.find('.message').classes()).toContain('lowercased')
  })

  it('renders the correct label', () => {
    defaultConfig.propsData.label = LABEL_EXAMPLE
    const wrapper = getWrapper()
    expect(wrapper.find('.label').text()).toEqual(LABEL_EXAMPLE)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find('.shield').classes()).toContain(`${COLOR}-colored`)
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find(`.${INDICATION}-indication`)).toBeTruthy()
  })
})
