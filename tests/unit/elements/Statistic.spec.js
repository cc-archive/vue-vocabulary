import { shallowMount } from '@vue/test-utils'

import Statistic from '@/elements/Statistic/Statistic'

describe('Statistic.vue', () => {
  const VALUE = 'Value Demo'
  const LABEL = 'Label Demo'
  const IS_TEXTUAL_VALUE = true
  const IS_PLURAL = true
  const ICON_SET = ['vote-yea', 'vote-yea']
  const COLOR = 'red'
  const INDICATION = 'positive'
  const IS_INVERTIBLE = true
  const SLOT = '<strong class="test-my-slot">Hello World</strong>'
  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {}
    }
  })

  function getWrapper () {
    return shallowMount(Statistic, defaultConfig)
  }

  it('renders the correct value', () => {
    defaultConfig.propsData.value = VALUE
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain(VALUE)
  })

  it('renders the correct label', () => {
    defaultConfig.propsData.label = LABEL
    const wrapper = getWrapper()
    expect(wrapper.text()).toContain(LABEL)
  })

  it('renders the correct styling for textual value', () => {
    defaultConfig.propsData.isTextualValue = IS_TEXTUAL_VALUE
    const wrapper = getWrapper()
    expect(wrapper.find('.value').classes()).toContain('textual')
  })

  it('renders the correct styling for plural', () => {
    defaultConfig.propsData.isPlural = IS_PLURAL
    const wrapper = getWrapper()
    expect(wrapper.find('.plural').exists()).toBe(true)
  })

  it('renders the correct styling for plural', () => {
    defaultConfig.propsData.isPlural = IS_PLURAL
    const wrapper = getWrapper()
    expect(wrapper.find('.plural').exists()).toBe(true)
  })

  it('renders the correct icons', () => {
    defaultConfig.propsData.iconSet = ICON_SET
    const wrapper = getWrapper()
    expect(wrapper.find('.addons.value').exists()).toBe(true)
    expect(wrapper.find('.addons.value *[icon*="vote-yea"]').exists()).toBe(true)
    expect(wrapper.find('.addons.label').exists()).toBe(true)
    expect(wrapper.find('.addons.label *[icon*="vote-yea"]').exists()).toBe(true)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find('.statistic').classes()).toContain(`${COLOR}-colored`)
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = IS_INVERTIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.statistic').classes()).toContain('inverted')
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find('.statistic').classes()).toContain('positive-indicating')
  })

  it('renders the correct slot for value addons', () => {
    defaultConfig.slots = {
      valueAddons: SLOT
    }
    const wrapper = getWrapper()
    expect(wrapper.find('.value.addons').html()).toContain(SLOT)
  })

  it('renders the correct slot for label addons', () => {
    defaultConfig.slots = {
      labelAddons: SLOT
    }
    const wrapper = getWrapper()
    expect(wrapper.find('.label.addons').html()).toContain(SLOT)
  })
})
