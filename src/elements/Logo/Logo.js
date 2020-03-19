import Logo from '@/patterns/Logo/Logo'

import { select } from '@storybook/addon-knobs'

export default { title: 'Patterns|Logo' }

export const creativeCommons = () => ({
  components: { Logo },
  props: {
    type: {
      default: () => select('Type', {
        Wordmark: 'wordmark',
        Lettermark: 'lettermark',
        Letterheart: 'letterheart'
      }, 'wordmark')
    }
  },
  template: `
    <div>
      <Logo :type="type"/>
    </div>
  `
})

export const vocabulary = () => ({
  components: { Logo },
  template: `
    <div>
      <Logo brand="vocabulary" type="wordmark"/>
    </div>
  `
})

export const fonts = () => ({
  components: { Logo },
  template: `
    <div>
      <Logo brand="fonts" type="wordmark"/>
    </div>
  `
})
