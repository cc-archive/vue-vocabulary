import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isReadOnly: {
      default: () => boolean('Read Only', false)
    }
  }
}
