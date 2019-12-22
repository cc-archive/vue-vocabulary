import SwitchField from '@/elements/SwitchField/SwitchField'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Disable from '@/knobs/disable'
import ReadOnly from '@/knobs/readonly'
import Simplified from '@/knobs/simplified'
import Roundness from '@/knobs/rounded'
import Scale from '@/knobs/scaled'

export default { title: 'Elements|SwitchField' }

export const colored = () => ({
  mixins: [Colored],
  components: { SwitchField },
  template: `
    <div>
        <SwitchField 
            :color="color" 
            :shade="shade"/>
        <br/><br/>
        <SwitchField 
            :color="color" 
            :shade="shade"
            value= "true"/>
    </div>

  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { SwitchField },
  template: `
    <SwitchField :brand="brand"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { SwitchField },
  template: `
    <SwitchField :indication="indication"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { SwitchField },
  template: `
    <SwitchField :isInverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const disable = () => ({
  mixins: [Disable],
  components: { SwitchField },
  template: `
    <SwitchField :isDisabled="isDisabled"/>
  `
})

export const readonly = () => ({
  mixins: [ReadOnly],
  components: { SwitchField },
  template: `
      <SwitchField :isReadOnly="isReadOnly"/>
    `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { SwitchField },
  template: `
    <SwitchField :simplicity="simplicity" :color="color" :shade="shade"/>
  `
})

export const roundness = () => ({
  mixins: [ Roundness, Colored ],
  components: { SwitchField },
  template: `
        <SwitchField :roundness="roundness" :color="color" :shade="shade"/>
      `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { SwitchField },
  template: `
    <SwitchField :size="size"/>
  `
})

export const withAddOns = () => ({
  components: { SwitchField, Grid, GridCell },
  template: `
    <Grid>
        <GridCell :span-set="[12, 4, 4, 4, 4]">
        <SwitchField
            color="yellow"
            size="huge" 
            :value="true"
            is-labelled/>
        </GridCell>
        <GridCell :span-set="[12, 4, 4, 4, 4]">
        <SwitchField
            color="lime"
            size="huge"
            :value="true"
            :iconSet="['times', 'check']"
            is-labelled/>
        </GridCell>
        <GridCell :span-set="[12, 4, 4, 4, 4]">
        <SwitchField
            color="cyan"
            size="huge"
            :value="true"
            :iconSet="[['fab', 'bluetooth-b'], ['fab', 'bluetooth-b']]"
            is-labelled/>
        </GridCell>
    </Grid>
      `
})
