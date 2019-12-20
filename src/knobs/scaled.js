import { select } from '@storybook/addon-knobs'

const sizeOptions = {
  Small: 'small',
  Normal: 'normal',
  Big: 'big',
  Large: 'large',
  Huge: 'huge',
  Enormous: 'enormous',
  Gigantic: 'gigantic',
  Mega: 'mega'
}

export default {
  props: {
    size: {
      default: () => select('Sizes', sizeOptions, sizeOptions.Small)
    }
  }
}
