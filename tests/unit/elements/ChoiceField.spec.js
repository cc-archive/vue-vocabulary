import { shallowMount, mount } from '@vue/test-utils'

import ChoiceField from '@/elements/ChoiceField/ChoiceField'

describe('ChoiceField.vue', () => {
  const VALUE = 'A'
  const COLOR = 'red'
  const SIZE = 'mega'
  const INDICATION = 'positive'
  const IS_INVERTIBLE = true
  let defaultConfig = null

  beforeEach(() => {
    defaultConfig = {
      propsData: {}
    }
  })

  function getWrapper () {
    return shallowMount(ChoiceField, defaultConfig)
  }

  it('emits the checked value correctly', () => {
    const wrapper = getWrapper()

    wrapper.find('input').element.value = VALUE
    wrapper.find('input').element.checked = true
    wrapper.find('input').trigger('change')

    expect(wrapper.emitted().change[0][0][0]).toBe(VALUE)
  })

  it('single select', () => {
    const wrapper = mount({
      template: `<div>
        <ChoiceField v-model="name" value="${VALUE}" is-single-select/>
        <ChoiceField v-model="name" value="Jhon" is-checked is-single-select/>
        <ChoiceField v-model="name" value="Dhoe" is-single-select/>
      </div>`,
      components: {
        ChoiceField
      },
      data () {
        return {
          name: ''
        }
      }
    })

    const ChoiceField1 = wrapper.findAll('input').at(0)
    ChoiceField1.element.checked = true
    ChoiceField1.trigger('change')
    expect(wrapper.vm.$data.name).toBe(VALUE)
  })

  it('renders the correct color', () => {
    defaultConfig.propsData.color = COLOR
    const wrapper = getWrapper()
    expect(wrapper.find('.choice-field').classes()).toContain(`${COLOR}-colored`)
  })

  it('renders the correct invertion', () => {
    defaultConfig.propsData.isInverted = IS_INVERTIBLE
    const wrapper = getWrapper()
    expect(wrapper.find('.choice-field').classes()).toContain('inverted')
  })

  it('renders the correct indication', () => {
    defaultConfig.propsData.indication = INDICATION
    const wrapper = getWrapper()
    expect(wrapper.find('.choice-field').classes()).toContain('positive-indicating')
  })

  it('renders the correct scale/size', () => {
    defaultConfig.propsData.size = SIZE
    const wrapper = getWrapper()
    expect(wrapper.find('.choice-field').classes()).toContain('mega-sized')
  })

  it('renders the correct simplicity ', () => {
    defaultConfig.propsData.simplicity = 'slight'
    const wrapper = getWrapper()
    expect(wrapper.find('.choice-field').classes()).toContain('slightly-simple')
  })
})
