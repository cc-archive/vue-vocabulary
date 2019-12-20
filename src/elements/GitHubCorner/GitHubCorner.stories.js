import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'
import { select } from '@storybook/addon-knobs'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

export default { title: 'Elements|GitHubCorner' }

export const colored = () => ({
  mixins: [Colored],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :color="color" :shade="shade"/>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :brand="brand"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :isInverted="isInverted"/>
  `
})

export const corner = () => ({
  components: {
    GitHubCorner
  },
  props: {
    corner: {
      default: select(
        'Corner',
        {
          Right: 'right',
          Left: 'left'
        },
        'right'
      )
    }
  },
  template: `<GitHubCorner :corner="corner"/>
  `
})

export const position = () => ({
  components: {
    GitHubCorner
  },
  props: {
    position: {
      default: select(
        'Position',
        {
          Relative: 'relative',
          Absolute: 'absolute'
        },
        'relative'
      )
    }
  },
  template: `<GitHubCorner :position="position"/>
    `
})
