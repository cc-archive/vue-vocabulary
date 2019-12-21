import ProgressBar from '@/elements/ProgressBar/ProgressBar'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Roundness from '@/knobs/rounded'
import Scale from '@/knobs/scaled'

export default { title: 'Elements|ProgressBar' }

export const colored = () => ({
  mixins: [Colored],
  components: { ProgressBar },
  template: `
    <ProgressBar :color="color" :shade="shade"/>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { ProgressBar },
  template: `
    <ProgressBar :brand="brand"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ProgressBar },
  template: `
    <ProgressBar :indication="indication"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ProgressBar },
  template: `
    <ProgressBar :isInverted="isInverted"/>
  `
})

export const roundness = () => ({
  mixins: [ Roundness ],
  components: { ProgressBar },
  template: `
      <ProgressBar :roundness="roundness">Click Me</ProgressBar>
    `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { ProgressBar },
  template: `
    <ProgressBar :size="size"/>
  `
})

export const withAddOns = () => ({
  components: { ProgressBar },
  template: `
    <ProgressBar 
        icon="hourglass-half"
        :value="20"
        is-percent-visible/>
    `
})
