import { storiesOf } from '@storybook/vue'

import Welcome from './Welcome.vue'

const stories = storiesOf('Vocabulary', module)

stories
  .add('Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />'
  }))
