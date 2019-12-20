import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isCircular: {
      default: () => boolean('Circleable', false)
    }
  }
}
