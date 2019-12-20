import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'
import Simplified from '@/knobs/simplified'
import Scale from '@/knobs/scaled'

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

export const unactionable = () => ({
  mixins: [Unactionable],
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
