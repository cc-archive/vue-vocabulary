import Trail from '@/patterns/Trail/Trail'
import TrailCrumb from '@/patterns/Trail/TrailCrumb'
import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

import Colored from '@/knobs/colored'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faBook,
  faCubes,
  faCube,
  faHandshake
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBook, faCubes, faCube, faHandshake)

export default { title: 'Patterns|TrailCrumb' }

export const addOnSet = () => ({
  mixins: [Colored],
  components: { Trail, TrailCrumb, FontAwesomeIcon, LicenseIconography },
  template: ` 
  <div>
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

    <br/><br/>

    <Trail :color="color" :shade="shade" >
        <TrailCrumb>
            <template #addons>
            <LicenseIconography :icon-list="['']"/>
            </template>
            Creative Commons
        </TrailCrumb>
        <TrailCrumb>
            <template #addons>
            <FontAwesomeIcon
                :icon="['fas', 'handshake']"
                fixed-width/>
            </template>
            Licenses
        </TrailCrumb>
        <TrailCrumb>
            <template #addons>
            <LicenseBadge
                license="by"
                size="small"
                is-centered/>
            </template>
            Attribution
        </TrailCrumb>
    </Trail>

</div>
  `
})
