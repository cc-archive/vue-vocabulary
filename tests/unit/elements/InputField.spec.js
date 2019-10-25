import { shallowMount } from '@vue/test-utils'

import InputField from '@/elements/InputField/InputField'

describe('InputField.vue', () => {
  const VALUE = 'Hello World'
  const ROUNDNESS = 'complete'
  const COLOR = 'red'
  const ICON_SET = ['vote-yea', 'keyboard']
  const SIZE = 'mega'
  const INDICATION = 'positive'
  const IS_INVERTIBLE = true
  const SLOT = '<strong class="test-my-slot">Hello World</strong>'

  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {},
      slots: {}
    }
  })

  function getWrapper() {
    return shallowMount(InputField, defaultConfig)
  }

  function type(wrapper, value) {
    wrapper.element.value = value
    wrapper.trigger('input')
  }

  it('renders the correct value on typing', () => {
    defaultConfig.propsData.value = VALUE
    const wrapper = getWrapper()

    type(wrapper.find('input'), VALUE)

    expect(wrapper.emitted().input[0][0]).toBe(VALUE)
  })

  it('renders left addon slot correctly', () => {
    defaultConfig.slots.leftAddons = SLOT
    const wrapper = getWrapper()
    expect(wrapper.find('.left.addons').html()).toContain(SLOT)
  })

  it('renders right addon slot correctly', () => {
    defaultConfig.slots.rightAddons = SLOT
    const wrapper = getWrapper()
    expect(wrapper.find('.right.addons').html()).toContain(SLOT)
  })

  it('renders the left icon correctly', () => {
    defaultConfig.propsData.icon = ICON_SET
    const wrapper = getWrapper()
    expect(wrapper.find(`*[icon*="${ICON_SET[0]}"]`).exists()).toBe(true)
  })

  it('renders the right icon correctly', () => {
    defaultConfig.propsData.icon = ICON_SET
    const wrapper = getWrapper()
    expect(wrapper.find(`*[icon*="${ICON_SET[1]}"]`).exists()).toBe(true)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain(`${COLOR}-colored`)
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain(`${INDICATION}-indicating`)
  })

  it('renders the correct roundness', () => {
    defaultConfig.propsData.roundness = ROUNDNESS
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain('completely-rounded')
  })

  it('renders the correct scale/size', () => {
    defaultConfig.propsData.size = SIZE
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain('mega-sized')
  })

  it('renders the correct simplicity ', () => {
    defaultConfig.propsData.simplicity = 'slight'
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain('slightly-simple')
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = IS_INVERTIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.input-field').classes()).toContain('inverted')
  })
})
