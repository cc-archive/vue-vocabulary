import { storiesOf } from '@storybook/vue'

import Welcome from './Welcome.vue'

const stories = storiesOf('Vocabulary', module)

stories
  .add('Welcome to Storybook', () => ({
    components: { Welcome },
    template: '<welcome />'
  }))
