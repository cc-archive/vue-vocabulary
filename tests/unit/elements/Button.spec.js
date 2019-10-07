import { shallowMount } from '@vue/test-utils'

import Button from '@/elements/Button/Button'

describe('Button.vue', () => {
    const ROUNDNESS = 'complete'
    const COLOR = 'red'
    const ICON = 'vote-yea'
    const SIZE = 'mega'
    const INDICATION = 'positive'
    const IS_INVERTIBLE = true
    const IS_CALL_TO_ACTION = true
    const SLOT = '<strong class="test-my-slot">Hello World</strong>'
    let defaultConfig = null

    beforeEach(() => {
        defaultConfig = {
            propsData: {
            }
        }
    })

    function getWrapper() {
        return shallowMount(Button, defaultConfig)
    }

    it('renders addons\'s slot correctly', () => {
        defaultConfig.slots = {
            addons: SLOT
        }
        const wrapper = getWrapper()
        expect(wrapper.find('.addons').html()).toContain(SLOT)
    })

    it('renders content\'s slot correctly', () => {
        defaultConfig.slots = {
            default: SLOT
        }
        const wrapper = getWrapper()
        expect(wrapper.find('.content').html()).toContain(SLOT)
    })

    it('renders icon correctly', () => {
        defaultConfig.propsData.icon = ICON
        const wrapper = getWrapper()
        expect(wrapper.find(`*[icon*="${ICON}"]`).exists()).toBe(true)
    })

    it('renders the correct color', () => {
        defaultConfig.propsData.color = COLOR
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain(`${COLOR}-colored`)
    })

    it('renders the correct invertion', () => {
        defaultConfig.propsData.isInverted = IS_INVERTIBLE
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('inverted')
    })

    it('renders the correct indication', () => {
        defaultConfig.propsData.indication = INDICATION
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('positive-indicating')
    })

    it('renders the correct scale/size', () => {
        defaultConfig.propsData.size = SIZE
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('mega-sized')
    })

    it('renders the correct roundedness', () => {
        defaultConfig.propsData.roundness = ROUNDNESS
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('completely-rounded')
    })

    it('renders the correct simplicity ', () => {
        defaultConfig.propsData.simplicity = 'slight'
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('slightly-simple')
    })

    it('renders the correct call to action styling ', () => {
        defaultConfig.propsData.isCallToAction = IS_CALL_TO_ACTION
        const wrapper = getWrapper()
        expect(wrapper.find('.button').classes()).toContain('call-to-action')
    })
})
