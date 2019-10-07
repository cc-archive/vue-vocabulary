import { shallowMount } from '@vue/test-utils'

import ProgressBar from '@/elements/ProgressBar/ProgressBar'

describe('ProgressBar.vue', () => {
  const VALUE = 30
  const ROUNDNESS = 'complete'
  const COLOR = 'red'
  const ICON = 'vote-yea'
  const SIZE = 'mega'
  const INDICATION = 'positive'
  const IS_INVERTIBLE = true
  const IS_PERCENT_VISIBLE = true
  const SLOT = '<strong class="test-my-slot">Hello World</strong>'
  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {}
    }
  })

  function getWrapper () {
    return shallowMount(ProgressBar, defaultConfig)
  }

  it('renders the correct value', () => {
    defaultConfig.propsData.value = VALUE
    const wrapper = getWrapper()
    expect(wrapper.find(`progress`).element.value).toBe(VALUE)
  })

  it('renders the correct percentage', () => {
    defaultConfig.propsData.value = VALUE
    defaultConfig.propsData.isPercentVisible = IS_PERCENT_VISIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').text()).toContain(`${VALUE}%`)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').classes()).toContain(`${COLOR}-colored`)
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = IS_INVERTIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').classes()).toContain('inverted')
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').classes()).toContain('positive-indicating')
  })

  it('renders the correct scale/size', () => {
    defaultConfig.propsData.size = SIZE
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').classes()).toContain('mega-sized')
  })

  it('renders the correct roundedness', () => {
    defaultConfig.propsData.roundness = ROUNDNESS
    const wrapper = getWrapper()
    expect(wrapper.find('.progress-bar').classes()).toContain('completely-rounded')
  })

  it('renders the correct icon', () => {
    defaultConfig.propsData.icon = ICON
    const wrapper = getWrapper()
    expect(wrapper.find(`*[icon*="${ICON}"]`).exists()).toBe(true)
  })

  it('renders left addons\'s slot correctly', () => {
    defaultConfig.slots = {
      leftAddons: SLOT
    }
    const wrapper = getWrapper()
    expect(wrapper.find('.left.addons').html()).toContain(SLOT)
  })

  it('renders right addons\'s slot correctly', () => {
    defaultConfig.slots = {
      rightAddons: SLOT
    }
    const wrapper = getWrapper()
    expect(wrapper.find('.right.addons').html()).toContain(SLOT)
  })
})
