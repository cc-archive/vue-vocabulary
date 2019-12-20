import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isDisabled: {
      default: () => boolean('Disable', false)
    }
  }
}
