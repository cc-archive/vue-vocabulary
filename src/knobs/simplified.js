import { select } from '@storybook/addon-knobs'

const simplifiedOptions = {
  Slight: 'slight',
  Extreme: 'extreme'
}

export default {
  props: {
    simplicity: {
      default: () => select('Simplify', simplifiedOptions, simplifiedOptions.Slight)
    }
  }
}
