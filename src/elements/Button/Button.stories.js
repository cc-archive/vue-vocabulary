import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Disable from '@/knobs/disable'
import Simplified from '@/knobs/simplified'
import Scale from '@/knobs/scaled'
import Roundness from '@/knobs/rounded'
import Text from '@/knobs/text'
import WithIcon from '@/knobs/withIcon'

export default { title: 'Elements|Button' }

export const colored = () => ({
  mixins: [Colored],
  components: { Button },
  template: `
    <Button :color="color" :shade="shade">{{ color }} {{ shade}}</Button>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Button },
  template: `
    <Button :brand="brand">{{ brand }}</Button>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Button },
  template: `
    <Button :indication="indication">{{ indication }}</Button>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Button },
  template: `
    <Button :isInverted="isInverted">Click Me</Button>
  `
})

export const disabled = () => ({
  mixins: [Disable],
  components: { Button },
  template: `
    <Button :isDisabled="isDisabled"> Click Me</Button>
  `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { Button },
  template: `
    <Button :simplicity="simplicity" :color="color" :shade="shade">Click Me</Button>
  `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { Button },
  template: `
    <Button :size="size">Click Me</Button>
  `
})

export const roundness = () => ({
  mixins: [ Roundness ],
  components: { Button },
  template: `
    <Button :roundness="roundness">Click Me</Button>
  `
})

export const text = () => ({
  mixins: [ Text ],
  components: { Button },
  template: `
    <Button>{{text}}</Button>
  `
})

export const withIcon = () => ({
  mixins: [WithIcon, Text, Colored],
  components: { Button },
  template: `
    <Button :icon="icon" :color="color">{{text}}</Button>
  `
})
