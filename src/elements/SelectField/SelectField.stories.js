import SelectField from '@/elements/SelectField/SelectField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

export default { title: 'Elements|SelectField' }

const picked = 'b'

const optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
]

export const branded = () => ({
  mixins: [Branded],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :brand="brand" :option-list="optionList" />
  `
})

export const colored = () => ({
  mixins: [Colored],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :color="color" :shade="shade" :option-list="optionList"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :indication="indication" :option-list="optionList"/>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :roundness="roundness" :option-list="optionList"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :size="size" :option-list="optionList"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :simplicity="simplicity" :option-list="optionList"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :is-inverted="isInverted" :option-list="optionList"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <SelectField :is-disabled="isDisabled" :is-read-only="isReadOnly" :option-list="optionList"/>
  `
})
