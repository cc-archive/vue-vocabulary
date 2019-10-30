import { shallowMount, mount } from '@vue/test-utils'

import Rating from '@/elements/Rating/Rating'

describe('Rating.vue', () => {
  const VALUE = 3
  const MAX = 12
  const SIZE = 'mega'
  const COLOR = 'red'
  const ICON_SET = ['frown', 'meh', 'smile']
  const INDICATION = 'positive'
  const IS_INVERTIBLE = true
  const IS_DISABLED = true
  const IS_READ_ONLY = true
  const IS_SINGLE_SELECTED = true
  const IS_TOGGLEABLE = true

  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {}
    }
  })

  function getWrapper () {
    return shallowMount(Rating, defaultConfig)
  }

  it('emits the correct value', () => {
    // deep mount without stubing child components
    const wrapper = mount(Rating)
    wrapper.findAll('.icon.unit').at(VALUE - 1).trigger('click')
    expect(wrapper.emitted().input[0][0]).toBe(VALUE)
  })

  it('toggls correctly', () => {
    defaultConfig.propsData.value = VALUE
    defaultConfig.propsData.isToggleable = IS_TOGGLEABLE
    const wrapper = mount(Rating, defaultConfig)
    const iconElement = wrapper.findAll('.icon.unit').at(VALUE - 1)
    iconElement.trigger('click')
    expect(wrapper.emitted().input[0][0]).toBe(0)
  })

  it('renders maximum icons correctly', () => {
    defaultConfig.propsData.max = MAX
    const wrapper = getWrapper()
    const iconElement = wrapper.findAll('.icon.unit').at(MAX - 1)
    expect(iconElement.exists()).toBe(true)
  })

  it('sets icons as expected', () => {
    defaultConfig.propsData.iconSet = ICON_SET
    defaultConfig.propsData.max = 3
    const wrapper = getWrapper()
    // 4 because there is a default icon, take a look at Rating.vue
    expect(wrapper.findAll(`*[icon]`).length).toBe(4)
    expect(wrapper.findAll(`*[icon*="${ICON_SET[0]}"]`).length).toBe(1)
    expect(wrapper.findAll(`*[icon*="${ICON_SET[1]}"]`).length).toBe(1)
    expect(wrapper.findAll(`*[icon*="${ICON_SET[2]}"]`).length).toBe(1)
  })

  it('single select', () => {
    defaultConfig.propsData.isSingleSelect = IS_SINGLE_SELECTED
    const wrapper = mount(Rating, defaultConfig)
    wrapper.findAll('.icon.unit').at(2).trigger('click')
    wrapper.findAll('.icon.unit').at(2).trigger('click')
    expect(wrapper.findAll('.active').length).toBe(1)
  })

  it('doesnt emit on disabled mode ', () => {
    defaultConfig.propsData.isDisabled = IS_DISABLED
    const wrapper = mount(Rating, defaultConfig)
    wrapper.findAll('.icon.unit').at(3).trigger('click')
    expect(wrapper.emitted('input')).toBe(undefined)
  })

  it('doesnt emit on readOnly mode ', () => {
    defaultConfig.propsData.isReadOnly = IS_READ_ONLY
    const wrapper = mount(Rating, defaultConfig)
    wrapper.findAll('.icon.unit').at(3).trigger('click')
    expect(wrapper.emitted('input')).toBe(undefined)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find(`.${COLOR}-colored`).exists()).toBe(true)
  })

  it('renders the correct size', () => {
    defaultConfig.propsData.size = SIZE
    const wrapper = getWrapper()
    expect(wrapper.find(`.${SIZE}-sized`).exists()).toBe(true)
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find('.rating').classes()).toContain(`${INDICATION}-indicating`)
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = IS_INVERTIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.rating').classes()).toContain('inverted')
  })
})
