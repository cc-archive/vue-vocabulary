import { shallowMount } from '@vue/test-utils'

import SwitchField from '@/elements/SwitchField/SwitchField'

describe('SwitchField.vue', () => {
  it('renders correct color', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        color: 'red'
      }
    })

    expect(wrapper.find('.switch-field').classes()).toContain('red-colored')
  })

  it('renders correct labells', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        isLabelled: true
      }
    })

    const SYMBOL_OFF_TEXT_CONTENT = wrapper.find('.symbol.off').text().toLowerCase()
    const SYMBOL_ON_TEXT_CONTENT = wrapper.find('.symbol.on').text().toLowerCase()

    expect(SYMBOL_OFF_TEXT_CONTENT).toBe('o')
    expect(SYMBOL_ON_TEXT_CONTENT).toBe('i')
  })

  it('renders correct indication', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        indication: 'positive'
      }
    })

    expect(wrapper.find('.positive-indication')).toBeTruthy()
  })

  it('check the switch', () => {
    const wrapper = shallowMount(SwitchField, {})

    const switchElement = wrapper.find('.switch-field')

    // before the click
    expect(switchElement.classes()).not.toContain('checked')

    // after a click
    switchElement.trigger('click')
    expect(switchElement.classes()).toContain('checked')

    // emitted events
    expect(wrapper.emitted('input')[0][0]).toBe(true)
  })

  it('uncheck the switch', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        value: true
      }
    })

    const switchElement = wrapper.find('.switch-field')

    // before the click
    expect(switchElement.classes()).toContain('checked')

    // after a click
    switchElement.trigger('click')
    expect(switchElement.classes()).not.toContain('checked')

    // emitted events
    expect(wrapper.emitted('input')[0][0]).toBe(false)
  })

  it('check the switch doesnt work on disabled mode ', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        isDisabled: true
      }
    })

    const switchElement = wrapper.find('.switch-field')

    switchElement.trigger('click')

    // emitted events
    expect(switchElement.classes()).not.toContain('checked')
    expect(wrapper.emitted('input')).toBe(undefined)
  })

  it('check the switch doesnt work on readOnly mode ', () => {
    const wrapper = shallowMount(SwitchField, {
      propsData: {
        isReadOnly: true
      }
    })

    const switchElement = wrapper.find('.switch-field')

    switchElement.trigger('click')

    // emitted events
    expect(switchElement.classes()).not.toContain('checked')
    expect(wrapper.emitted('input')).toBe(undefined)
  })
})
