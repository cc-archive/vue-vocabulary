import { storiesOf } from '@storybook/vue'

import Layer from './Layer'

const stories = storiesOf('Tokens/Layer', module)

stories
  .add('Layer', () => ({
    components: { Layer },
    template: '<Layer property="layer"/>'
  }))
