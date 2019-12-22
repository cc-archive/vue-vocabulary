import NavigationLink from '@/patterns/Navigation/NavigationLink'
import Navigation from '@/patterns/Navigation/Navigation'
import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

import Colored from '@/knobs/colored'
import WithIcon from '@/knobs/withIcon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHandshake)

export default { title: 'Patterns|NavigationLink' }

export const withIcon = () => ({
  mixins: [Colored, WithIcon],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation :color="color">
        <NavigationLink :icon="icon">
            Home page
        </NavigationLink>
        <NavigationLink :icon="icon">
            Style guide
        </NavigationLink>
    </Navigation>
  `
})

export const withAddOns = () => ({
  mixins: [Colored],
  components: { Navigation, NavigationLink, FontAwesomeIcon, LicenseIconography },
  template: ` 
    <Navigation :color="color">
      <NavigationLink>
        <template #addons>
          <LicenseIconography :icon-list="['']"/>
        </template>
        Creative Commons
      </NavigationLink>
      <NavigationLink>
        <template #addons>
          <FontAwesomeIcon :icon="['fas', 'handshake']"/>
        </template>
        Licenses
      </NavigationLink>
    </Navigation>
  `
})
