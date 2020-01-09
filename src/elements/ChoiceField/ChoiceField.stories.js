import ChoiceField from '@/elements/ChoiceField/ChoiceField'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Simplified from '@/knobs/simplified'
import Scaled from '@/knobs/scaled'
import Toned from '@/knobs/toned'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

import { boolean } from '@storybook/addon-knobs'

export default { title: 'Elements|ChoiceField' }

export const branded = () => ({
  mixins: [Branded],
  components: { ChoiceField },
  template: `
    <ChoiceField :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { ChoiceField },
  template: `
    <ChoiceField :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ChoiceField },
  template: `
    <ChoiceField :indication="indication"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { ChoiceField },
  template: `
    <ChoiceField :size="size"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { ChoiceField },
  template: `
    <ChoiceField :simplicity="simplicity"/>
  `
})

export const toned = () => ({
  mixins: [Toned],
  components: { ChoiceField },
  template: `
    <ChoiceField :tone="tone"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-disabled="isDisabled" :is-read-only="isReadOnly"/>
  `
})

export const unstyleable = () => ({
  components: { ChoiceField },
  props: {
    isUnstyled: {
      default: boolean('Is unstyled?', true)
    }
  },
  template: `
    <ChoiceField :is-unstyled="isUnstyled"/>
  `
})

export const example = () => ({
  data: function () {
    return {
      picked
    }
  },
  components: { ChoiceField, Grid, GridCell },
  template: `
    <Grid>
        <GridCell :span-set="[12, 6, 6, 6, 6]">
            <ChoiceField
                v-model="picked"
                id="a"
                name="choice"
                value="A"
                simplicity="slight"/>
            <label for="a">Option text</label>
            <br/>
            <ChoiceField
                v-model="picked"
                id="b"
                brand="blue"
                name="choice"
                value="B" />
            <label for="b">Option text</label>
            <br/>
            <ChoiceField
                v-model="picked"
                id="c"
                name="choice"
                value="C"
                is-disabled/>
            <label for="c">Option text</label>
        </GridCell>
    </Grid>
    `
})
