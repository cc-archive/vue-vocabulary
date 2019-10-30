import { config, shallowMount } from '@vue/test-utils'

import SelectField from '@/elements/SelectField/SelectField'

describe('SelectField.vue', () => {
  let defaultConfig = null

  beforeEach(() => {
    config.mocks.$t = key => key

    defaultConfig = {
      propsData: {
        optionList: [
          {
            value: 'a',
            text: 'example A'
          },
          {
            value: 'b',
            text: 'example B'
          }
        ],
        color: 'red'
      }
    }
  })

  function getWrapper () {
    return shallowMount(SelectField, defaultConfig)
  }

  it('emits the correct value', () => {
    const wrapper = getWrapper()
    const optionElement = wrapper.find('option[value="a"]')
    optionElement.selected = true
    optionElement.trigger('change')
    expect(wrapper.emitted().change[0][0]).toEqual('a')
  })

  it('renders the correct icon', () => {
    defaultConfig.propsData.icon = 'vote-yea'
    const wrapper = getWrapper()
    expect(wrapper.find('[icon*="vote-yea"]').exists()).toBe(true)
  })

  it('renders the correct color', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('red-colored')
  })

  it('renders the correct text "select" ', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('option[disabled]').text()).toBe('select')
  })

  it('renders the correct options', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('option[value="a"]').text()).toBe('example A')
    expect(wrapper.find('option[value="b"]').text()).toBe('example B')
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = 'positive'
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('positive-indicating')
  })

  it('renders the correct scale/size', () => {
    defaultConfig.propsData.size = 'mega'
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('mega-sized')
  })

  it('renders the correct roundedness', () => {
    defaultConfig.propsData.roundness = 'complete'
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('completely-rounded')
  })

  it('renders the correct simplicity ', () => {
    defaultConfig.propsData.simplicity = 'slight'
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('slightly-simple')
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = true
    const wrapper = getWrapper()
    expect(wrapper.find('.select-field').classes()).toContain('inverted')
  })
})
