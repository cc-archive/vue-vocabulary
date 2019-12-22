import { Navigation, NavigationLink } from '@/patterns/Navigation/Navigation'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

export default { title: 'Patterns|Navigation' }

export const colorSet = () => ({
  mixins: [Colored],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation
        :color="color"
        :shade="shade">
        <NavigationLink>One</NavigationLink>
        <NavigationLink>Two</NavigationLink>
        <NavigationLink>Three</NavigationLink>
    </Navigation>
  `
})

export const invertedSet = () => ({
  mixins: [Invertible, Colored],
  components: { Navigation, NavigationLink },
  template: `
    <div> 
        <Navigation :isInverted="isInverted">
            <NavigationLink>One</NavigationLink>
            <NavigationLink>Two</NavigationLink>
            <NavigationLink>Three</NavigationLink>
        </Navigation>
        <br/>
        <Navigation :color="color" :isInverted="isInverted">
            <NavigationLink>One</NavigationLink>
            <NavigationLink>Two</NavigationLink>
            <NavigationLink>Three</NavigationLink>
        </Navigation>
    </div>
  `
})
invertedSet.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const withAddOns = () => ({
  mixins: [Colored, Invertible],
  components: { Navigation, NavigationLink },
  template: ` 
    <Navigation
        :color="orange"
        :isInverted="isInverted">
        <NavigationLink icon="home" link="https://github.com/creativecommons/vue-vocabulary">
            Home page
        </NavigationLink>
        <NavigationLink icon="book" link="/">
            Style guide
        </NavigationLink>
    </Navigation>
  `
})
