import Header from '@/patterns/Header/Header'
import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
import NavigationLink from '@/patterns/Navigation/NavigationLink'
import Navigation from '@/patterns/Navigation/Navigation'

import Colored from '@/knobs/colored'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBook)

export default { title: 'Patterns|Header' }

export const colorSet = () => ({
  mixins: [Colored],
  components: { Header },
  template: `
    <div>
        <Header/>
        <br/><br/>
        <Header 
            :color="color" 
            :shade="shade" />
        <br/><br/>
        <Header 
            :color="color" 
            :shade="shade" 
            title= "Change title" />
    </div>
  `
})

export const withAddOns = () => ({
  mixins: [ Colored ],
  components: { Header, BrandImagery, Navigation, NavigationLink },
  template: `
    <div>
        <Header>
            <template #branding>
                <BrandImagery
                color="white"
                brand="vocabulary"
                size="small"
                is-centered/>
            </template>
            <div>
                <Heading :level="6">You really mean anything?</Heading>
                Yes, <em>literally</em> anything.
            </div>
        </Header>

        <br/><br/>

        <Header 
            appName="Vocabulary" 
            :color="color">
            <Navigation
                is-inverted>
                <NavigationLink icon="home">
                Home page
                </NavigationLink>
                <NavigationLink icon="book">
                Documentation
                </NavigationLink>
            </Navigation>
        </Header>
    </div>
     `
})
