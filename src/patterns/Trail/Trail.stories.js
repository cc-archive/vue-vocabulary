import Trail from '@/patterns/Trail/Trail'
import TrailCrumb from '@/patterns/Trail/TrailCrumb'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faBook,
  faCubes,
  faCube
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBook, faCubes, faCube)

export default { title: 'Patterns|Trail' }

export const colorSet = () => ({
  mixins: [Colored],
  components: { Trail, TrailCrumb },
  template: `
    <Trail
        :color="color"
        :shade="shade">
        <TrailCrumb>Top</TrailCrumb>
        <TrailCrumb>Middle</TrailCrumb>
        <TrailCrumb>Bottom</TrailCrumb>
    </Trail>
  `
})

export const invertedSet = () => ({
  mixins: [Invertible, Colored],
  components: { Trail, TrailCrumb },
  template: `
    <div>
        <Trail :isInverted="isInverted">
        <TrailCrumb>Top</TrailCrumb>
        <TrailCrumb>Middle</TrailCrumb>
        <TrailCrumb>Bottom</TrailCrumb>
        </Trail>
        <br/>
        <Trail :color="color" :shade="shade" :isInverted="isInverted">
        <TrailCrumb>Top</TrailCrumb>
        <TrailCrumb>Middle</TrailCrumb>
        <TrailCrumb>Bottom</TrailCrumb>
        </Trail>
    </div>
  `
})
invertedSet.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const addOnSet = () => ({
  mixins: [Colored],
  components: { Trail, TrailCrumb },
  template: ` 
    <Trail :color="color" :shade="shade"  >
        <TrailCrumb icon="home" link="https://github.com/creativecommons/vue-vocabulary">
            Vocabulary
        </TrailCrumb>
        <TrailCrumb icon="book" link="/">
            Styleguide
        </TrailCrumb>
        <TrailCrumb icon="cubes" link="/#/Patterns">
            Patterns
        </TrailCrumb>
        <TrailCrumb icon="cube" link="/#/Patterns/Trail">
            Trail
        </TrailCrumb>
    </Trail>
  `
})
