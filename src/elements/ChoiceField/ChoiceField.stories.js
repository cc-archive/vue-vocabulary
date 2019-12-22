import ChoiceField from '@/elements/ChoiceField/ChoiceField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Disable from '@/knobs/disable'
import ReadOnly from '@/knobs/readonly'
import Simplified from '@/knobs/simplified'
import Scale from '@/knobs/scaled'

export default { title: 'Elements|ChoiceField' }

export const colored = () => ({
  mixins: [Colored],
  components: { ChoiceField },
  template: `
    <ChoiceField :color="color" :shade="shade"/>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { ChoiceField },
  template: `
    <ChoiceField :brand="brand"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ChoiceField },
  template: `
    <ChoiceField :indication="indication"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ChoiceField },
  template: `
    <ChoiceField :isInverted="!isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const disable = () => ({
  mixins: [Disable],
  components: { ChoiceField },
  template: `
    <ChoiceField :isDisabled="isDisabled"/>
  `
})

export const readonly = () => ({
  mixins: [ReadOnly],
  components: { ChoiceField },
  template: `
      <ChoiceField :isReadOnly="isReadOnly"/>
    `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { ChoiceField },
  template: `
    <ChoiceField :simplicity="simplicity" :color="color" :shade="shade"/>
  `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { ChoiceField },
  template: `
    <ChoiceField :size="size"/>
  `
})
