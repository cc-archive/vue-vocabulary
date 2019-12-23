import Section from '@/layouts/Section/Section'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Raise from '@/knobs/raisable'
import Simplified from '@/knobs/simplified'
import Roundness from '@/knobs/rounded'
import Text from '@/knobs/text'
import Directions from '@/knobs/direction'

export default { title: 'Layouts|Section' }

export const colored = () => ({
  mixins: [Colored],
  components: { Section },
  template: `
    <Section :color="color" :shade="shade">{{ color }} {{ shade}}</Section>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Section },
  template: `
    <Section :brand="brand">{{ brand }}</Section>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Section },
  template: `
    <Section :indication="indication">{{ indication }}</Section>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Section },
  template: `
    <Section :isInverted="isInverted">Click Me</Section>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const raised = () => ({
  mixins: [Raise],
  components: { Section },
  template: `
    <Section :isRaised="isRaised"> Click Me</Section>
  `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { Section },
  template: `
    <Section :simplicity="simplicity" :color="color" :shade="shade">Click Me</Section>
  `
})

export const roundness = () => ({
  mixins: [ Roundness ],
  components: { Section },
  template: `
    <Section :roundness="roundness">Click Me</Section>
  `
})

export const text = () => ({
  mixins: [ Text ],
  components: { Section },
  template: `
    <Section>{{text}}</Section>
  `
})

export const styleSet = () => ({
  mixins: [ Directions, Colored ],
  components: { Section },
  template: `
      <Section 
          :color="color" 
          :shade="shade"
          :color-side="direction">
              Click Me
      </Section>
    `
})
