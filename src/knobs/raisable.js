import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isRaised: {
      default: () => boolean('Raise', false)
    }
  }
}
