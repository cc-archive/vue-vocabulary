import { shallowMount } from '@vue/test-utils'

import ImageView from '@/elements/ImageView/ImageView'

describe('ImageView.vue', () => {
  const SOURCE = 'Source Demo'
  const ALTERNATE_TEXT = 'Hello'
  const TITLE = 'Title Demo'
  const PRIMARY_DIMENSION_HEIGHT = 'height'
  const PRIMARY_DIMENSION_WIDTH = 'width'
  const IS_CENTERED = true
  const IS_HOVERABLE = true
  const SIZE = 'mega'
  const SLOT = '<strong>Hello World</strong>'
  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {

        source: SOURCE,
        alternateText: ALTERNATE_TEXT

      }
    }
  })

  function getWrapper() {
    return shallowMount(ImageView, defaultConfig)
  }

  it('renders the correct image for the given source', () => {
    const wrapper = getWrapper()

    expect(wrapper.find(`img[src="${SOURCE}"]`).exists()).toBe(true)
  })

  it('renders the correct alternate text', () => {
    const wrapper = getWrapper()

    expect(wrapper.find(`img[alt="${ALTERNATE_TEXT}"]`).exists()).toBe(true)
  })

  it('renders the correct title', () => {
    defaultConfig.propsData.title = TITLE
    defaultConfig.propsData.isHoverable = IS_HOVERABLE
    const wrapper = getWrapper()

    expect(wrapper.find('.addons.bottom').text()).toContain(TITLE)
  })

  it('renders the correct height dimension constraint', () => {
    defaultConfig.propsData.primaryDimension = PRIMARY_DIMENSION_HEIGHT
    const wrapper = getWrapper()

    expect(wrapper.find(`.${PRIMARY_DIMENSION_HEIGHT}-constrained`).exists()).toBe(true)
  })

  it('renders the correct width dimension constraint', () => {
    defaultConfig.propsData.primaryDimension = PRIMARY_DIMENSION_WIDTH
    const wrapper = getWrapper()

    expect(wrapper.find(`.${PRIMARY_DIMENSION_WIDTH}-constrained`).exists()).toBe(true)
  })

  it('centers the image correctly', () => {
    defaultConfig.propsData.isCentered = IS_CENTERED
    const wrapper = getWrapper()

    expect(wrapper.find(`.centered`).exists()).toBe(true)
  })

  it('hovers the image correctly', () => {
    defaultConfig.propsData.isHoverable = IS_HOVERABLE
    const wrapper = getWrapper()

    expect(wrapper.find(`.hoverable`).exists()).toBe(true)
  })

  it('renders the correct size', () => {
    defaultConfig.propsData.size = SIZE
    const wrapper = getWrapper()

    expect(wrapper.find(`.${SIZE}-sized`).exists()).toBe(true)
  })

  it('renders the topAddons correctly', () => {
    defaultConfig.propsData.isHoverable = IS_HOVERABLE
    defaultConfig.slots = {
      topAddons: SLOT
    }

    const wrapper = getWrapper()

    expect(wrapper.find(`.addons.top`).html()).toContain(SLOT)
  })

  it('renders the bottomAddons correctly', () => {
    defaultConfig.propsData.isHoverable = IS_HOVERABLE
    defaultConfig.slots = {
      bottomAddons: SLOT
    }

    const wrapper = getWrapper()

    expect(wrapper.find(`.addons.bottom`).html()).toContain(SLOT)
  })
})
